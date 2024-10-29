<?php

namespace App\Http\Controllers\Api;

use App\Models\City;
use App\Models\Setting;
use App\Models\Skill;
use App\Models\Specialization;
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
        $response['specializations'] = Specialization::all();
        $response['skills'] = Skill::all();
        $response['cities'] = City::all();

        return response()->json($response);
    }
}
