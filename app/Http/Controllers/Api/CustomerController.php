<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Company;
use App\Models\Customer;
use App\Models\Worker;
use Auth;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function register(RegisterRequest $request)
    {
        Customer::create($request->only(['name', 'email', 'phone', 'type']));
        return response()->json();
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
            $customer->load(['vacancies']);
        } else {
            $customer->load(['resume']);
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
