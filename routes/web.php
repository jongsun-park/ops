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
use Illuminate\Database\Eloquent\Model;

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

    // user
    Route::get("/users", function () {
        return "User List managed by Admin";
    })->name('users.index');
});


Route::get("/search", function () {
    return "SEARCH PAGE - LATER";
});

Route::prefix('options')->middleware('auth')->group(function () {
    $options = [
        'colors' => Color::all()->toArray(),
        'corners' => Corner::all()->toArray(),
        'grades' => Grade::all()->toArray(),
        'hem_sizes' => HemSize::all()->toArray(),
        'hem_types' => HemType::all()->toArray(),
        'labels' => Label::all()->toArray(),
        'looms' => Loom::all()->toArray(),
        'materials' => Material::all()->toArray(),
        'packings' => Packing::all()->toArray(),
        'statuses' => Status::all()->toArray(),
        'suppliers' => Supplier::all()->toArray(),
        'units' => Unit::all()->toArray(),
        'urgencies' => Urgency::all()->toArray(),
        'wash_options' => WashOption::all()->toArray(),
    ];

    $classMap = [
        'colors' => Color::class,
        'corners' => Corner::class,
        'grades' => Grade::class,
        'hem_sizes' => HemSize::class,
        'hem_types' => HemType::class,
        'labels' => Label::class,
        'looms' => Loom::class,
        'materials' => Material::class,
        'packings' => Packing::class,
        'statuses' => Status::class,
        'suppliers' => Supplier::class,
        'units' => Unit::class,
        'urgencies' => Urgency::class,
        'wash_options' => WashOption::class,
    ];

    Route::get('/', function () use ($options, $classMap) {
        return Inertia::render('Options/Index', [
            'options_keys' => array_keys($options),
            'options' => Color::all()->toArray(), // default
            'tableName' => 'colors' // default
        ]);
    })->name('options.index');

    Route::get('/{tableName}', function ($tableName) use ($options) {

        // case - invalid options
        if (!isset($options[$tableName])) return redirect('/');

        return Inertia::render('Options/Index', [
            'options_keys' => array_keys($options),
            'options' =>  $options[$tableName],
            'tableName' => $tableName
        ]);
    });

    Route::post('/{tableName}', function (Request $request, $tableName) use ($options, $classMap) {

        // case - invalid options
        if (!isset($options[$tableName])) {
            return back()->with('error', 'Fail to add new option');
        }

        $attributes = $request->validate(
            ['name' => 'required']
        );

        $classMap[$tableName]::create($attributes);

        return back()->with('success', 'Success to create');
    });

    Route::delete('/{tableName}/{id}', function ($tableName, $id) use ($classMap) {

        // case - invalid options
        if (!isset($options[$tableName])) return redirect('/');

        $classMap[$tableName]::find($id)->delete();

        return back()->with('success', 'Success to delete');
    });
});


require __DIR__ . '/auth.php';
