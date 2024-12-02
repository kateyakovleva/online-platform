<?php

namespace App\Http\Controllers\Api;

use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    public function updateResume(Request $request)
    {
        $customer = $this->getCustomer();

        if ($customer instanceof Worker) {
            $customer->update($request->only('phone'));
            $customer->resume->fill($request->except('phone'));
            $customer->resume->save();
        }

        return response()->json();
    }

    public function responses()
    {

    }
}
