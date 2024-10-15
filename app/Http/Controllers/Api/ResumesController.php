<?php

namespace App\Http\Controllers\Api;

use App\Models\Resume;

class ResumesController extends Controller
{
    public function index()
    {
        return Resume::paginate(20);
    }
}
