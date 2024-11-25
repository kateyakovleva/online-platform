<?php

namespace App\Traits;

trait UseOptions
{
    public static function bootUseOptions()
    {
        static::saving(function ($model) {
            if (is_null($model->data)) {
                $model->data = [];
            }
        });
    }

    public function initializeUseOptions()
    {
        $this->casts['data'] = 'array';
        $this->attributes['data'] = '{}';
    }

    private function getOption($code)
    {
        return $this->data[$code] ?? null;
    }

    private function setOption($code, $value): self
    {
        $options = $this->data ?? [];
        $options[$code] = $value;
        $this->data = $options;

        return $this;
    }
}
