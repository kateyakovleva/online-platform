<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string $email
 * @property string $code
 * @property int $used
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|EmailConfirm newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EmailConfirm newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EmailConfirm query()
 * @mixin \Eloquent
 */
class EmailConfirm extends Model
{
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $table = 'email_confirm';

    protected $attributes = [
        'used' => false
    ];
}
