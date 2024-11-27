<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 *
 *
 * @property int $id
 * @property string $type
 * @property string $code
 * @property array $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting query()
 * @mixin \Eloquent
 */
class Setting extends BaseModel
{
    use HasFactory;

    protected $casts = [
        'value' => 'json'
    ];

    public static function findByCode($code): static|null
    {
        return static::where('code', $code)->first();
    }
}
