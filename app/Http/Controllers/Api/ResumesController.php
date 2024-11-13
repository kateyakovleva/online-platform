<?php

namespace App\Http\Controllers\Api;

use App\Models\Resume;

class ResumesController extends Controller
{
    public function index()
    {
        return Resume::with(['city', 'skills', 'specialization', 'worker'])
            ->orderByDesc('updated_at')
            ->paginate(20);
    }
}
