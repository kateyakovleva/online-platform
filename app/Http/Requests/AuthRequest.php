<?php

namespace App\Http\Requests;

use Auth;
use Closure;
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
            'password' => [
                'required',
                function (string $attribute, mixed $value, Closure $fail) {
                    if (!Auth::attempt($this->only(['email', 'password']))) {
                        $fail("Неверный логин или пароль.");
                    }
                },
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'email' => 'Пожалуйста введите корректный email.',
            'email.exists' => 'Данный емайл не зарегистрирован.',
            'password' => 'Введен неверный пароль'
        ];
    }
}
