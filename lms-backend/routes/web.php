<?php

use App\Http\Controllers\CourseController;
use App\Models\Course;
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return "hello world";
});

Route::post('/courses', [CourseController::class, 'store']);