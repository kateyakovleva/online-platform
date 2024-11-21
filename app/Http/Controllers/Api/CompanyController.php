<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\VacanciesRequest;

class CompanyController extends Controller
{
    public function vacancies(VacanciesRequest $request)
    {
        return $this->getCustomer()->vacancies()
            ->with(['city', 'skills', 'specialization', 'company'])
            ->orderByDesc('created_at')
            ->paginate(20);
    }

    public function createVacancy(VacanciesRequest $request)
    {
        $this->getCustomer()->vacancies()->create($request->all());

        return response()->json();
    }

    public function get($id)
    {
        return $this->getCustomer()->vacancies()
            ->with(['city', 'skills', 'specialization', 'company'])
            ->find($id);
    }

    public function update($id, VacanciesRequest $request)
    {
        $this->getCustomer()->vacancies()
            ->find($id)
            ->update($request->all());

        return $this->get($id);
    }

    public function delete($id)
    {
        $this->getCustomer()->vacancies()
            ->find($id)?->delete();

        return response()->json();
    }
}
