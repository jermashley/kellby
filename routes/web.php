<?php

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
        return redirect('dashboard');
    }

    return Inertia::render('Public/Home/Index');
});

Route::get('/register', function () {
    return Inertia::render('Public/Auth/Register');
})->middleware('guest')->name('register');

Route::get('/login', function () {
    return Inertia::render('Public/Auth/Login');
})->middleware('guest')->name('login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware('auth')->name('dashboard');

Route::prefix('user')->as('user.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('User/Settings');
    });
});

require __DIR__.'/auth.php';
