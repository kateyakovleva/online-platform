<?php

namespace App\Http\Controllers\Api;

use App\Models\Resume;
use Illuminate\Http\Request;

class ResumesController extends Controller
{
    public function index(Request $request)
    {
        return Resume::with(['city', 'skills', 'specialization', 'worker'])
            ->when($request->get('format'), function ($query) use ($request) {
                $query->where('format', $request->get('format'));
            })
            ->when($request->get('city_id'), function ($query) use ($request) {
                $query->where('city_id', $request->get('city_id'));
            })
            ->when($request->get('specialization_id'), function ($query) use ($request) {
                $query->where('specialization_id', $request->get('specialization_id'));
            })
            ->when($request->get('search'), function ($query) use ($request) {
                $query->where(function ($query) use ($request) {
                    $query->where('vacancy', 'LIKE', '%' . $request->get('search') . '%')
                        ->orWhere('courses', 'LIKE', '%' . $request->get('search') . '%')
                        ->orWhere('interesting', 'LIKE', '%' . $request->get('search') . '%');
                });
            })
            ->orderByDesc('updated_at')
            ->paginate(20);
    }

    public function get($id)
    {
        return Resume::with(['city', 'skills', 'specialization', 'worker', 'response'])
            ->find($id);
    }
}
