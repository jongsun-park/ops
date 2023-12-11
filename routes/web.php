<?php

use App\Http\Controllers\LoomController;
use App\Http\Controllers\MaterialController;
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
use App\Http\Controllers\UserController;
use App\Http\Controllers\WashOptionController;
use App\Models\Color;
use App\Models\Corner;
use App\Models\Grade;
use App\Models\HemSize;
use App\Models\HemType;
use App\Models\Label;
use App\Models\Loom;
use App\Models\Material;
use App\Models\Packing;
use App\Models\ProductionOrderStatus;
use App\Models\Supplier;
use App\Models\Unit;
use App\Models\Urgency;
use App\Models\WashOption;
use Illuminate\Database\Eloquent\Model;

Route::get('/', function () {
    if (Auth::user()?->isAdmin()) {
        return redirect('/dashboard');
    } else {
        return redirect('login');
    }
});

// portfolio
Route::get('/about-me', function () {
    return Inertia::render('AboutMe/Index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    // production
    Route::resource('productions', ProductionController::class);

    Route::patch('/production_order_status/{productionOrderStatus}', [ProductionController::class, 'statusUpdate'])->name('production.status.update');

    // product
    Route::resource('products', ProductController::class);

    // yarn
    Route::resource('yarns', YarnController::class);
});


Route::middleware('admin')->group(function () {
    // user
    Route::get("/users", [UserController::class, 'index'])->name('users.index');

    Route::get("/users/{user}/edit", [UserController::class, 'edit'])->name('users.edit');
    Route::put("/users/{user}", [UserController::class, 'update'])->name('users.update');
    Route::delete("/users/{user}", [UserController::class, 'destroy'])->name('users.destroy');
});


Route::middleware('admin')->group(function () {
    // options
    Route::resources([
        'looms' => LoomController::class,
        'wash_options' => WashOptionController::class,
        'materials' => MaterialController::class,
    ]);
});

Route::get("/search", function () {
    return "SEARCH PAGE - LATER";
});



require __DIR__ . '/auth.php';
