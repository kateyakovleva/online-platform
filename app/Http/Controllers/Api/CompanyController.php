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
        $data = $request->all();
        $data['price_from'] = $data['price_from'] ?: null;
        $data['price_to'] = $data['price_to'] ?: null;
        $this->getCustomer()->vacancies()->create($data);

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
