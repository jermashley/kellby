<?php

use App\Models\TimeLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::user()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Public/Home/Index');
});

Route::get('/register', function () {
    if (Auth::user()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Public/Auth/Register');
})->middleware('guest')->name('register');

Route::get('/login', function () {
    if (Auth::user()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Public/Auth/Login');
})->middleware('guest')->name('login');

// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware('auth')->name('dashboard');

// User routes
Route::prefix('user')->middleware('auth')->as('user.')->group(function () {
    Route::get('/profile', function () {
        return Inertia::render('User/Profile/Index', [
            'log' => TimeLog::first(),
        ]);
    });
});

Route::get('students', function () {
    return Inertia::render('Students/Index');
})->middleware('auth')->name('students.index');

Route::get('students/{student:uuid}', function ($uuid) {
    return Inertia::render('Students/Show', [
        'uuid' => $uuid,
    ]);
})->middleware('auth')->name('students.show');

require __DIR__.'/auth.php';
