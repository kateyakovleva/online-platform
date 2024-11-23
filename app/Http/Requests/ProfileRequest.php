<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'description' => 'nullable|string',
            'city_id' => 'nullable|string',
            'image' => 'mimes:jpeg,jpg,png',
        ];
    }

    public function messages()
    {
        $messages = parent::messages();

        $messages['image'] = 'Неверный формат изображения!';

        return $messages;
    }

}
