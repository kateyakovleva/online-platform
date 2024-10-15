<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    protected static bool|null $shouldReturnJson = null;

    public static function setShouldReturnJson(bool|null $value): void
    {
        static::$shouldReturnJson = $value;
    }

    protected function shouldReturnJson($request, Throwable $e)
    {
        if (static::$shouldReturnJson !== null) return static::$shouldReturnJson;

        return parent::shouldReturnJson($request, $e);
    }
}
