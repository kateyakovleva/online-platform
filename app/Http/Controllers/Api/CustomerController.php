<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function register(RegisterRequest $request)
    {
        Customer::create($request->only(['name', 'email', 'phone', 'type']));

        return response()->json();
    }

    public function auth(AuthRequest $request)
    {
        

        return response()->json();
    }
}
