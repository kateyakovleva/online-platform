<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Handler;
use Illuminate\Support\Facades\Auth;

class Controller extends \App\Http\Controllers\Controller
{
    public function __construct()
    {
        Handler::setShouldReturnJson(true);
        Auth::setDefaultDriver('customers');
    }
}
