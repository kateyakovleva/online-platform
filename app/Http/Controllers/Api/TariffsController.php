<?php

namespace App\Http\Controllers\Api;

use App\Models\Tariff;

class TariffsController extends Controller
{
    public function index()
    {
        return Tariff::all();
    }
}
