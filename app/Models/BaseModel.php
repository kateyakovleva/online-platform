<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @method static Builder|BaseModel newModelQuery()
 * @method static Builder|BaseModel newQuery()
 * @method static Builder|BaseModel query()
 * @mixin \Eloquent
 */
class BaseModel extends Model
{
    public function __construct(array $attributes = [])
    {
        $this->hidden = array_merge($this->hidden, array_values(self::$hiddens[static::class] ?? []));

        parent::__construct($attributes);
    }

    public function getInstanceClassName($attributes = []): string
    {
        return static::class;
    }

    public function newInstance($attributes = [], $exists = false)
    {
        $model = new ($this->getInstanceClassName($attributes));

        $model->exists = $exists;

        $model->setConnection(
            $this->getConnectionName()
        );

        $model->setTable($this->getTable());

        $model->mergeCasts($this->casts);

        $model->fill((array)$attributes);

        return $model;
    }

    public function newFromBuilder($attributes = [], $connection = null)
    {
        $model = $this->newInstance((array)$attributes, true);

        $model->setRawAttributes((array)$attributes, true);

        $model->setConnection($connection ?: $this->getConnectionName());

        $model->fireModelEvent('retrieved', false);

        return $model;
    }

    protected static $hiddens = [];

    public static function addHidden(string $fieldName)
    {
        self::$hiddens[static::class][$fieldName] = $fieldName;
    }

    public static function removeHidden(string $fieldName)
    {
        unset(self::$hiddens[static::class][$fieldName]);
    }
}
