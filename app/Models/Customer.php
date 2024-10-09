<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

/**
 *
 *
 * @property int $id
 * @property int $type
 * @property string $name
 * @property string $image
 * @property string $email
 * @property mixed $password
 * @property array|null $data
 * @property int|null $tariff_id
 * @property \Illuminate\Support\Carbon|null $tariff_end_of
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Tariff|null $tariff
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer withoutTrashed()
 * @mixin \Eloquent
 */
class Customer extends Authenticatable
{
    use HasFactory, SoftDeletes, HasApiTokens;

    protected $table = 'customers';

    const COMPANY_TYPE = 1;
    const WORKER_TYPE = 2;

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'tariff_end_of' => 'datetime',
        'data' => 'array',
    ];

    protected $hidden = [
        'password',
    ];

    public function setPasswordAttribute($value)
    {
        if ($value) $this->attributes['password'] = Hash::make($value);
        return $this;
    }

    public function setImageAttribute($value)
    {
        if ($value) $this->attributes['image'] = $value;
        return $this;
    }

    public function tariff(): BelongsTo
    {
        return $this->belongsTo(Tariff::class);
    }
}
