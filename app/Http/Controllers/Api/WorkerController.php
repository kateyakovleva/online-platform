<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Models\Worker;
use Auth;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    public function updateResume(Request $request)
    {
        /** @var Worker|Company $customer */
        $customer = Auth::user();

        if ($customer instanceof Worker) {
            $customer->resume->fill($request->all());
            $customer->resume->save();
        }

        return $this->profile();
    }
}
