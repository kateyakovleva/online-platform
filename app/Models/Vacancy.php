<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

/**
 *
 *
 * @property int $id
 * @property int $company_id
 * @property int $specialization_id
 * @property string|null $vacancy
 * @property string|null $skills_description
 * @property string|null $description
 * @property string|null $growth_description
 * @property int $city_id
 * @property string|null $format
 * @property int|null $price_from
 * @property int|null $price_to
 * @property int $price_by_agree
 * @property string|null $benefits
 * @property string|null $comment
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\City|null $city
 * @property-read \App\Models\Company $company
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkResponse> $responses
 * @property \Illuminate\Database\Eloquent\Collection<int, \App\Models\Skill> $skills
 * @property-read \App\Models\Specialization $specialization
 * @method static \Database\Factories\VacancyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Vacancy newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Vacancy newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Vacancy query()
 * @mixin \Eloquent
 */
class Vacancy extends BaseModel
{
    use HasFactory, HasRelationships;

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class, 'skill_to_vacancy');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function specialization(): BelongsTo
    {
        return $this->belongsTo(Specialization::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function responses(): HasMany
    {
        return $this->hasMany(WorkResponse::class, 'vacancy_id')
            ->orderByDesc('created_at');
    }

    public function response()
    {
        /** @var Company | Worker $customer */
        $customer = \Auth::user();
        return $this->hasOne(WorkResponse::class)
            ->where('resume_id', $customer?->resume->id);
    }

    public function setSkillsAttribute($value)
    {
        $this->executeAfterSaving('skills', function () use ($value) {
            $this->skills()->sync($value);
        });
        return $this;
    }

    public function setPriceFromAttribute($value)
    {
        $this->attributes['price_from'] = $value ? null : $value;
        return $this;
    }

    public function setPriceToAttribute($value)
    {
        $this->attributes['price_to'] = $value ? null : $value;
        return $this;
    }
}
