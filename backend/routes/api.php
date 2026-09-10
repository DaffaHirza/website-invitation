<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RsvpController;
use App\Http\Controllers\WishesController;

Route::post('rsvp', [RsvpController::class, 'store']);
Route::get('rsvp', [RsvpController::class, 'index']);

Route::post('wishes', [WishesController::class, 'store']);
Route::get('wishes', [WishesController::class, 'index']);