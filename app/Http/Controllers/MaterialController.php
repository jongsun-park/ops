<?php

namespace App\Http\Controllers;

use App\Models\Loom;
use App\Models\Material;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index()
    {
        return Inertia::render('Options/Materials', [
            "materials" => Material::all(),
        ]);
    }
}
