<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 
 *
 * @property int $id
 * @property int $type
 * @property string $name
 * @property string $image
 * @property string $email
 * @property string $phone
 * @property mixed $password
 * @property array|null $data
 * @property int|null $tariff_id
 * @property \Illuminate\Support\Carbon|null $tariff_end_of
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $photo
 * @property-read bool $is_company
 * @property-read \App\Models\Tariff|null $tariff
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Vacancy> $vacancies
 * @method static \Database\Factories\CompanyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder|Company withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Company withoutTrashed()
 * @mixin \Eloquent
 */
class Company extends Customer
{
    protected $attributes = [
        'type' => self::COMPANY_TYPE
    ];

    public function vacancies(): HasMany
    {
        return $this->hasMany(Vacancy::class, 'company_id');
    }
}
