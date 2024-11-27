<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AddResponseRequest;
use App\Mail\NewWorkerResponseEmail;
use App\Models\Resume;
use App\Models\Vacancy;
use App\Models\WorkResponse;
use Illuminate\Http\Request;
use Mail;

class ResponsesController extends Controller
{
    public function responses(Request $request)
    {
        $customer = $this->getCustomer();
        $with = $customer->is_company ? 'resume' : 'vacancy';
        $with2 = $customer->is_company ? 'resume.worker' : 'vacancy.company';

        return $this->getCustomer()
            ->responses()
            ->with(["$with.city", "$with.skills", "$with.specialization", $with2])
            ->when($request->get('type'), function ($query) use ($request) {
                $query->where('type', (int)$request->get('type'));
            })
            ->paginate(20);
    }

    public function addResponse(AddResponseRequest $request)
    {
        $customer = $this->getCustomer();

        if ($customer->is_company) {
            /** @var $vacancy Vacancy */
            if ($request->vacancy_id) {
                $vacancy = $customer->vacancies()->find($request->vacancy_id);
            } else {
                $vacancy = $customer->vacancies()->first();
            }
            $resume = Resume::find($request->resume_id);
            if ($vacancy && $resume) {
                /** @var WorkResponse $response */
                $response = $vacancy->responses()->where($request->only(['resume_id', 'vacancy_id']))->first();
                if (!$response) {
                    $response = $vacancy->responses()->create(
                        [...$request->all(), 'type' => WorkResponse::INIT_COMPANY_TYPE]
                    );
                    Mail::to($resume->worker->email)
                        ->send(new NewWorkerResponseEmail($response));
                }
            }
        } else {
            if ($customer->resume->id === $request->resume_id) {
                $vacancy = Vacancy::find($request->vacancy_id);

                /** @var WorkResponse $response */
                $response = $customer->resume->responses()->where($request->only(['resume_id', 'vacancy_id']))->first();
                if (!$response) {
                    $response = $customer->resume->responses()->create(
                        [...$request->all(), 'type' => WorkResponse::INIT_WORKER_TYPE]
                    );

                    Mail::to($customer->email)
                        ->send(new NewWorkerResponseEmail($response));
                }
            }
        }

        return response()->json();
    }
}
