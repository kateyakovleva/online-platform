<?php

namespace App\Http\Middleware;

use App\Models\Company;
use App\Models\Customer;
use App\Models\Worker;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class HideResumeContacts
{
    public function handle(Request $request, Closure $next)
    {
        /** @var Customer $user */
        $user = \Auth::user();

        if (!$user && $request->bearerToken()) {
            $user = PersonalAccessToken::findToken($request->bearerToken())?->tokenable;
            if ($user) \Auth::login($user);
        }

        if (!$user?->tariff_end_of || $user->tariff_end_of->unix() < Carbon::now()->unix()) {
            Worker::addHidden('email');
            Worker::addHidden('phone');
            Company::addHidden('email');
            Company::addHidden('phone');
        }

        return $next($request);
    }
}
