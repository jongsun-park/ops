<?php

namespace App\Http\Controllers;

use App\Models\Loom;
use App\Models\WashOption;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;

class WashOptionController extends Controller
{
    public function index()
    {
        return Inertia::render('Options/WashOptions', [
            "washOptions" => WashOption::all(),
            "looms" => Loom::with('yarn')->latest('updated_at')->get(),
            "yarns" => Yarn::select('id', 'sku as name')->get()
        ]);
    }
}
