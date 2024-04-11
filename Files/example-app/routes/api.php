<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Route::get('/test', function () {
//     return 'hello laravel';
// });

Route::post('/registration', [AuthController::class, 'registration']);
Route::post('/authorization', [AuthController::class, 'authorization']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::group(['middleware' => 'ApiAuth'], function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/update', [AuthController::class, 'update']);
    Route::post('/delete', [AuthController::class, 'delete']);
});