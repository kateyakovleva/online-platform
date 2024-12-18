<?php

namespace App\Models;

use App\Traits\UseOptions;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
 * @property-read bool $is_company
 * @property-read bool $is_online
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkResponse> $responses
 * @property-read \App\Models\Resume $resume
 * @property-read \App\Models\Tariff|null $tariff
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @method static \Database\Factories\WorkerFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Worker newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Worker newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Worker onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Worker query()
 * @method static \Illuminate\Database\Eloquent\Builder|Worker withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Worker withoutTrashed()
 * @mixin \Eloquent
 */
class Worker extends Customer
{
    use UseOptions;

    protected $attributes = [
        'type' => self::WORKER_TYPE,
        'image' => ''
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(function ($customer) {
            $customer->where('type', self::WORKER_TYPE);
        });
    }

    public function resume(): HasOne
    {
        return $this->hasOne(Resume::class, 'customer_id')
            ->withDefault();
    }

    public function responses(): HasMany
    {
        return $this->resume->responses();
    }

    public function getTgLinkAttribute()
    {
        return $this->getOption('tg_link');
    }

    public function setTgLinkAttribute($val)
    {
        return $this->setOption('tg_link', $val);
    }
}
