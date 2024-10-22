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
});

Route::prefix('resumes')->group(function () {
    Route::get('/', [\App\Http\Controllers\Api\ResumesController::class, 'index']);
});

Route::post('/register', [\App\Http\Controllers\Api\CustomerController::class, 'register']);
Route::post('/auth', [\App\Http\Controllers\Api\CustomerController::class, 'auth']);
