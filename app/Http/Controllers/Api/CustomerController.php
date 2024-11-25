<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\ConfirmEmail;
use App\Models\Customer;
use App\Models\EmailConfirm;
use App\Services\ImageUtil;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Mail;

class CustomerController extends Controller
{
    public function register(RegisterRequest $request)
    {
        if ($request->code) {
            $customer = Customer::create($request->only(['name', 'email', 'phone', 'type', 'password']));
            $customer->email_verified_at = Carbon::now();
            $customer->save();

            $customer = $customer->newInstance($customer->toArray());

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
            'token' => $this->getCustomer()
                ->createToken('api')
                ->plainTextToken
        ]);
    }

    public function profile()
    {
        $customer = $this->getCustomer();
        $customer->load(['tariff']);
        if ($customer->is_company) {
            $customer->load(['city']);
            $customer->loadCount('vacancies');
        } else {
            $customer->load(['resume.city', 'resume.skills', 'resume.specialization']);
        }

        return $customer;
    }

    public function updateProfile(ProfileRequest $request)
    {
        $customer = $this->getCustomer();
        $customer->update($request->except('image'));

        $file = $request->file('image');
        if ($file) {
            $filename = Str::random(10) . "." . $file->extension();
            Storage::putFileAs('avatars', $file, $filename);

            $image = new ImageUtil(Storage::path("avatars/$filename"));
            $image->resize(400, 400);
            $image->save(Storage::path("avatars/$filename"));

            $customer->image = "avatars/$filename";
            $customer->save();
        }

        return $customer;
    }
}
