<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Handler;

class Controller extends \App\Http\Controllers\Controller
{
    public function __construct()
    {
        Handler::setShouldReturnJson(true);
    }
}
