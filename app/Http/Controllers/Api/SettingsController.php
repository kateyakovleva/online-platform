<?php

namespace App\Http\Controllers\Api;

use App\Models\Setting;
use App\Models\Tariff;

class SettingsController extends Controller
{
    public function index()
    {
        $response = [];

        foreach (Setting::all() as $item) {
            $response['content'][$item->code] = $item->value;
        }

        $response['tariffs'] = Tariff::all();

        return response()->json($response);
    }
}
