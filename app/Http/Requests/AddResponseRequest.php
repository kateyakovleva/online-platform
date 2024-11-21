<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property $resume_id
 * @property $vacancy_id
 */
class AddResponseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return \Auth::user()?->exists();
    }

    public function rules(): array
    {
        return [
            'resume_id' => 'numeric',
            'vacancy_id' => 'numeric',
        ];
    }

}
