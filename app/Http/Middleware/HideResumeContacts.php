<?php

namespace App\Http\Middleware;

use App\Models\Customer;
use App\Models\Worker;
use Carbon\Carbon;
use Closure;

class HideResumeContacts
{
    public function handle($request, Closure $next)
    {
        /** @var Customer $user */
        $user = \Auth::user();

        if (!$user?->tariff_end_of || $user->tariff_end_of->unix() < Carbon::now()->unix()) {
            Worker::addHidden('email');
            Worker::addHidden('phone');
        }

        return $next($request);
    }
}
