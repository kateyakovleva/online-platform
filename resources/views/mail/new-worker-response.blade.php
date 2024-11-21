<x-mail::message>
    <p>Вам предлагают посмотреть вакансию!</p>
    <p>{{ $vacancy['vacancy'] }}</p>
    <a href="{{ config('app.url') }}/profile/offers">Посмотреть</a>

    {{ config('app.name') }}
</x-mail::message>
