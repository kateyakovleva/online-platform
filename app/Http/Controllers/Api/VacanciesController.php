<?php

namespace App\Http\Controllers\Api;

use App\Models\Vacancy;

class VacanciesController extends Controller
{
    public function index()
    {
        return Vacancy::paginate(20);
    }
}
