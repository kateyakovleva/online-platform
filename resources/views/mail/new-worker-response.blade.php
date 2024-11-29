<x-mail::message>
    <p>Ура! Новый отклик на вакансию!</p>
    <p>{{ $vacancy['vacancy'] }}</p>
    <a href="{{ config('app.url') }}/profile/offers">Посмотреть</a>

    {{ config('app.name') }}
</x-mail::message>
