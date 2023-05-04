<?php

use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\SubjectController;
use App\Http\Controllers\Api\SubjectTypesController;
use App\Http\Controllers\Api\UserTypesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->as('api.')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('user/types', UserTypesController::class)->middleware('auth')->name('User.types');

    Route::apiResource('student', StudentController::class);

    Route::get('/subject/types', SubjectTypesController::class)->name('subject.types');
    Route::apiResource('/subject', SubjectController::class);
});
