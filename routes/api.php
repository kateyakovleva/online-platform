<?php

use App\Http\Controllers\Api\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('settings')->group(function () {
    Route::get('/', [SettingsController::class, 'index']);
});

Route::prefix('vacancies')->group(function () {
    Route::get('/', [\App\Http\Controllers\Api\VacanciesController::class, 'index']);
    Route::get('{id}', [\App\Http\Controllers\Api\VacanciesController::class, 'get']);
});

Route::prefix('resumes')->group(function () {
    Route::get('/', [\App\Http\Controllers\Api\ResumesController::class, 'index']);
    Route::get('{id}', [\App\Http\Controllers\Api\ResumesController::class, 'get']);
});

Route::post('/register', [\App\Http\Controllers\Api\CustomerController::class, 'register']);
Route::post('/auth', [\App\Http\Controllers\Api\CustomerController::class, 'auth']);

Route::post('/form-request', [\App\Http\Controllers\Api\CustomerController::class, 'form']);

Route::prefix('profile')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\CustomerController::class, 'profile']);
        Route::post('/', [\App\Http\Controllers\Api\CustomerController::class, 'updateProfile']);
        Route::post('resume', [\App\Http\Controllers\Api\WorkerController::class, 'updateResume']);

        Route::prefix('vacancies')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\CompanyController::class, 'vacancies']);
            Route::post('/', [\App\Http\Controllers\Api\CompanyController::class, 'createVacancy']);

            Route::get('{id}', [\App\Http\Controllers\Api\CompanyController::class, 'get']);
            Route::post('{id}', [\App\Http\Controllers\Api\CompanyController::class, 'update']);
            Route::delete('{id}', [\App\Http\Controllers\Api\CompanyController::class, 'delete']);
        });

        Route::prefix('requests')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\RequestsController::class, 'list']);
        });

        Route::prefix('responses')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\ResponsesController::class, 'responses']);
            Route::post('/', [\App\Http\Controllers\Api\ResponsesController::class, 'addResponse']);
        });
    });
