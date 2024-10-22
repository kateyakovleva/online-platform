<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|email|max:255|exists:customers',
        ];
    }

    public function messages(): array
    {
        return [
            'email' => 'Пожалуйста введите корректный email.',
            'email.exists' => 'Данный емайл не зарегистрирован.',
        ];
    }
}
