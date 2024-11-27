<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest as LaravelFormRequest;

/**
 * @property string $tariff
 * @property string $name
 * @property string $company
 * @property string $phone
 * @property string $email
 */
class FormRequest extends LaravelFormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'tariff' => 'nullable|string',
            'name' => 'string|required',
            'company' => 'nullable|company',
            'phone' => 'string|required',
            'email' => 'nullable|string',
        ];
    }
}
