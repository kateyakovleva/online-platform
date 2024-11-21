<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

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
 * @property \Illuminate\Support\Carbon|null $last_online
 * @property string|null $description
 * @property int|null $city_id
 * @property-read \App\Models\City|null $city
 * @property-read bool $is_company
 * @property-read bool $is_online
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\WorkResponse[] $responses
 * @property-read \App\Models\Tariff|null $tariff
 * @property-read Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read Collection<int, \App\Models\Vacancy> $vacancies
 * @property-read int|null $responses_count
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
    use HasRelationships;

    protected $attributes = [
        'type' => self::COMPANY_TYPE
    ];

    public function vacancies(): HasMany
    {
        return $this->hasMany(Vacancy::class, 'company_id');
    }

    public function responses(): \Staudenmeir\EloquentHasManyDeep\HasManyDeep
    {
        return $this->hasManyDeepFromRelations($this->vacancies(), (new Vacancy())->responses());
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    /**
     * @return Collection<int, WorkResponse>
     */
    public function getResponsesAttribute()
    {
        return $this->responses;
    }
}
