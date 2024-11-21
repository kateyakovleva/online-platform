<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 *
 *
 * @property int $id
 * @property int $resume_id
 * @property int $vacancy_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $type
 * @property-read \App\Models\Resume $resume
 * @property-read \App\Models\Vacancy $vacancy
 * @method static \Illuminate\Database\Eloquent\Builder|WorkResponse newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkResponse newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkResponse query()
 * @mixin \Eloquent
 */
class WorkResponse extends BaseModel
{
    use HasFactory;

    const INIT_COMPANY_TYPE = 1;
    const INIT_WORKER_TYPE = 2;

    public function resume(): BelongsTo
    {
        return $this->belongsTo(Resume::class, 'resume_id');
    }

    public function vacancy(): BelongsTo
    {
        return $this->belongsTo(Vacancy::class, 'vacancy_id');
    }
}
