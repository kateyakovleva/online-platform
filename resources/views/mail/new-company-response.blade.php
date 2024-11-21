<x-mail::message>
    <p>У вас новый отклик на вакансию!</p>
    <p>{{ $vacancy['vacancy'] }}</p>
    <a href="{{ config('app.url') }}/company_profile/company_responses">Посмотреть</a>

    {{ config('app.name') }}
</x-mail::message>
