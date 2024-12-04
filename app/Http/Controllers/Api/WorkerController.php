<?php

namespace App\Http\Controllers\Api;

use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class WorkerController extends Controller
{
    public function updateResume(Request $request)
    {
        $customer = $this->getCustomer();

        if ($customer instanceof Worker) {
            $customer->phone = $request->get('phone');
            $customer->resume->fill($request->except(['phone', 'file']));

            $file = $request->file('file');
            if ($file) {
                $filename = Str::random(10) . "." . $file->extension();
                Storage::putFileAs('files', $file, $filename);
                $customer->resume->file = "files/$filename";
            }

            $customer->resume->save();
        }

        return response()->json();
    }

    public function responses()
    {

    }
}
