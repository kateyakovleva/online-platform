<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\ConfirmEmail;
use App\Models\Company;
use App\Models\Customer;
use App\Models\EmailConfirm;
use App\Models\Worker;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Mail;

class CustomerController extends Controller
{
    public function register(RegisterRequest $request)
    {
        if ($request->code) {
            $customer = Customer::create($request->only(['name', 'email', 'phone', 'type', 'password']));
            $customer->email_verified_at = Carbon::now();
            $customer->save();

            $confirm = EmailConfirm::where($request->only(['code', 'email']))->where('used', false)->first();
            $confirm?->update(['used' => true]);

            return response()->json([
                'token' => $customer->createToken('api')->plainTextToken
            ]);
        } else {
            $confirm = EmailConfirm::create([
                'email' => $request->email,
                'code' => random_int(100000, 999999),
            ]);

            Mail::to($request->email)
                ->send(new ConfirmEmail($confirm));

            return response()->json();
        }
    }

    public function auth(AuthRequest $request)
    {
        return response()->json([
            'token' => \Auth::user()->createToken('api')->plainTextToken
        ]);
    }

    public function profile()
    {
        /** @var Company|Worker $customer */
        $customer = Auth::user();
        $customer->load(['tariff']);
        if ($customer->is_company) {
            $customer->load(['vacancies.city']);
        } else {
            $customer->load(['resume.city', 'resume.skills', 'resume.specialization']);
        }

        return $customer;
    }

    public function updateProfile(Request $request)
    {
        /** @var Company|Worker $customer */
        $customer = Auth::user();
        $customer->update($request->all());

        return $customer;
    }
}
