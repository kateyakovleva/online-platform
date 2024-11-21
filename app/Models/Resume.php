<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 
 *
 * @property int $id
 * @property int $customer_id
 * @property int $specialization_id
 * @property string|null $vacancy
 * @property string|null $courses
 * @property string|null $interesting
 * @property int $city_id
 * @property string|null $format
 * @property string|null $finances
 * @property string|null $comment
 * @property string|null $file
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\City|null $city
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkResponse> $responses
 * @property \Illuminate\Database\Eloquent\Collection<int, \App\Models\Skill> $skills
 * @property-read \App\Models\Specialization $specialization
 * @property-read \App\Models\Worker $worker
 * @method static \Database\Factories\ResumeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Resume newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Resume newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Resume query()
 * @mixin \Eloquent
 */
class Resume extends BaseModel
{
    use HasFactory;

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class, 'skill_to_resume');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function specialization(): BelongsTo
    {
        return $this->belongsTo(Specialization::class);
    }

    public function worker(): BelongsTo
    {
        return $this->belongsTo(Worker::class, 'customer_id');
    }

    public function responses(): HasMany
    {
        return $this->hasMany(WorkResponse::class, 'resume_id')
            ->orderByDesc('created_at')
            ->with('vacancy');
    }

    public function setSkillsAttribute($value)
    {
        $this->executeAfterSaving('skills', function () use ($value) {
            $this->skills()->sync($value);
        });
        return $this;
    }
}
