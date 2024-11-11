<?php

namespace App\Models;

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
 * @property-read bool $is_company
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
    protected $attributes = [
        'type' => self::WORKER_TYPE,
        'image' => ''
    ];

    public function resume(): HasOne
    {
        return $this->hasOne(Resume::class, 'customer_id')
            ->withDefault();
    }
}
