<?php

use App\Http\Controllers\ProfileController;
use App\Models\Yarn;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::get('/yarns', function () {

        $yarns = Yarn::query()
            ->when(request('search'), function ($query, $search) {
                $query
                    ->where('yarns.name', 'like', "%{$search}%")
                    ->orWhere('yarns.sku', 'like', "%{$search}%");
            })
            // ->join('users as u', 'yarns.user_id', '=', 'u.id')
            // ->select('yarns.id', 'yarns.name', 'yarns.created_at', 'yarns.sku', 'u.id as user_id', 'u.email as user_email', 'u.name as user_name')
            ->orderByDesc('created_at')
            ->paginate(10)
            ->withQueryString()
            ->through(fn ($yarn) => [
                'id' => $yarn->id,
                'name' => $yarn->name,
                'sku' => $yarn->sku,
                'created_at' => $yarn->created_at,
                'user_id' => $yarn->user->id,
                'user_name' => $yarn->user->name,
                'user_email' => $yarn->user->email,
            ]);

        $filters = request()->only(['search']);

        return Inertia::render('Yarns/Index', [
            'yarns' => $yarns,
            'filters' => $filters
        ]);
    })->name('yarns');

    Route::get('/yarns/create', function () {
        return Inertia::render('Yarns/Create');
    })->name('yarns.create');


    Route::post('/yarns', function (Request $request) {
        // sleep(3);
        // validate the request
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required|unique:yarns',
        ]);

        // create yarn
        Yarn::create($attributes);

        // redirect
        return to_route('yarns');
    })->name('yarns.store');
});





require __DIR__ . '/auth.php';
