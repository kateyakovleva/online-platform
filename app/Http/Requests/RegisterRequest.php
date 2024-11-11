<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'type' => 'required|numeric',
            'code' => ['nullable', 'string', Rule::exists('email_confirm')->where(function ($query) {
                return $query->where(['email' => $this->email, 'code' => $this->code, 'used' => false]);
            }),],
            'password' => 'required|string|confirmed',
        ];
    }

    public function messages(): array
    {
        return [
            'name' => 'Пожалуйста укажите имя',
            'email' => 'Пожалуйста введите корректный email.',
            'email.unique' => 'Данный email уже используется.',
            'phone' => 'Пожалуйста введите корректный телефон.',
            'phone.unique' => 'Данный номер телефона уже используется.',
            'code' => 'Введен неверный код',
            'password' => 'Введенные пароли не совпадают.'
        ];
    }
}
