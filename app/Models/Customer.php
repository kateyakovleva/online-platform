<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

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
class Customer extends BaseUser
{
    use HasFactory, SoftDeletes, HasApiTokens;

    protected $table = 'customers';

    const COMPANY_TYPE = 1;
    const WORKER_TYPE = 2;

    protected $attributes = [
        'image' => '',
        'password' => '111'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'tariff_end_of' => 'datetime',
        'last_online' => 'datetime',
        'data' => 'array',
    ];

    protected $hidden = [
        'password',
    ];

    protected $appends = [
        'is_company',
        'is_online'
    ];

    public function setPasswordAttribute($value)
    {
        if ($value) $this->attributes['password'] = Hash::make($value);
        return $this;
    }

    public function setImageAttribute($value)
    {
        $image = $this->attributes['image'] ?? '';
        if ($image && $image != $value && Storage::exists($image)) {
            Storage::delete($image);
        }

        $this->attributes['image'] = $value ?? '';

        return $this;
    }

    public function getImageAttribute()
    {
        if (!$this->attributes['image']) return '';
        return config('app.url') . '/storage/' . $this->attributes['image'];
    }

    public function setTypeAttribute($value)
    {
        $this->attributes['type'] = match ((int)$value) {
            self::COMPANY_TYPE => self::COMPANY_TYPE,
            default => self::WORKER_TYPE
        };
        return $this;
    }

    public function getIsOnlineAttribute(): bool
    {
        return $this->last_online?->unix() > Carbon::now()->subMinutes(3)->unix();
    }

    public function tariff(): BelongsTo
    {
        return $this->belongsTo(Tariff::class);
    }

    public function getIsCompanyAttribute(): bool
    {
        return $this->type === self::COMPANY_TYPE;
    }

    public function getInstanceClassName($attributes = []): string
    {
        if (!$attributes) {
            return static::class;
        }

        return match ($attributes['type'] ?? '') {
            self::COMPANY_TYPE => Company::class,
            default => Worker::class
        };
    }
}
