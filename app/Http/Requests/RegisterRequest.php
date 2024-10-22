<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:customers',
            'phone' => 'required|string|max:255|unique:customers',
            'type' => 'required|numeric'
        ];
    }

    public function messages(): array
    {
        return [
            'name' => 'Пожалуйста укажите имя',
            'email' => 'Пожалуйста введите корректный email.',
            'phone' => 'Пожалуйста введите корректный телефон.',
        ];
    }
}
