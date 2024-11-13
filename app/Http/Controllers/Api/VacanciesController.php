<?php

namespace App\Http\Controllers\Api;

use App\Models\Vacancy;
use Illuminate\Http\Request;

class VacanciesController extends Controller
{
    public function index(Request $request)
    {
        $sql = Vacancy::with(['city', 'skills', 'specialization', 'company'])
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
                        ->orWhere('description', 'LIKE', '%' . $request->get('search') . '%')
                        ->orWhere('growth_description', 'LIKE', '%' . $request->get('search') . '%');
                });
            })->toSql();

        return Vacancy::with(['city', 'skills', 'specialization', 'company'])
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
                $query->where('vacancy', 'LIKE', '%' . $request->get('search') . '%')
                    ->orWhere('description', 'LIKE', '%' . $request->get('search') . '%')
                    ->orWhere('growth_description', 'LIKE', '%' . $request->get('search') . '%');
            })
            ->orderByDesc('created_at')
            ->paginate(20);
    }
}
