<x-mail::message>
    <p>Поступил новый запрос</p>
    <p>Имя: {{ $name }}</p>
    <p>Компания: {{ $company }}</p>
    <p>Телефон: {{ $phone }}</p>
    <p>Email: {{ $email }}</p>
    <p>Тариф: {{ $tariff }}</p>

    {{ config('app.name') }}
</x-mail::message>
