<?php

use App\Models\User;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\YarnController;

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
    Route::get('/productions', function () {
        return Inertia::render('Productions/Index');
    })->name('productions');

    // product
    Route::get('/products', function () {
        return Inertia::render('Products/Index');
    })->name('products');

    // yarn
    Route::resource('yarns', YarnController::class);
    // Route::get('/yarns', [YarnController::class, 'index'])->name('yarns.index');
    // Route::get('/yarns/create', [YarnController::class, 'create'])->can('create', User::class)->name('yarns.create');
    // Route::post('/yarns', [YarnController::class, 'store'])->name('yarns.store');
});





require __DIR__ . '/auth.php';
