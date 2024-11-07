<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VacanciesRequest extends FormRequest
{
    public function authorize(): bool
    {
        return \Auth::user()->is_company;
    }
}
