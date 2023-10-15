<?php

use App\Models\User;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\YarnController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductionController;
use App\Models\Color;
use App\Models\Corner;
use App\Models\Grade;
use App\Models\HemSize;
use App\Models\HemType;
use App\Models\Label;
use App\Models\Loom;
use App\Models\Material;
use App\Models\Packing;
use App\Models\Status;
use App\Models\Supplier;
use App\Models\Unit;
use App\Models\Urgency;
use App\Models\WashOption;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    // production
    Route::resource('productions', ProductionController::class);

    // product
    Route::resource('products', ProductController::class);

    // yarn
    Route::resource('yarns', YarnController::class);
});


require __DIR__ . '/options.php';

require __DIR__ . '/auth.php';
