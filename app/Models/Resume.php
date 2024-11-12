<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
 * @property \Illuminate\Database\Eloquent\Collection<int, \App\Models\Skill> $skills
 * @property-read \App\Models\Specialization $specialization
 * @property-read \App\Models\Worker|null $worker
 * @method static \Database\Factories\ResumeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Resume newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Resume newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Resume query()
 * @mixin \Eloquent
 */
class Resume extends Model
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

    public function setSkillsAttribute($value)
    {
        if ($this->exists) {
            $this->skills()->sync($value);
        }
    }
}
