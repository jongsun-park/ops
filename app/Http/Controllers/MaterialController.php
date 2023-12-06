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

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'name' => 'required|max:255|unique:materials,name',
            'code' => 'required|max:255',
        ]);

        $id = Material::create($attributes)->id;

        return to_route('materials.index')->with('message', "Wash Option Created");
    }

    public function update(Request $request, Material $material)
    {
        $attributes = $request->validate([
            'name' => 'required|max:255', // TODO: Unique validation
            'code' => 'required|max:255',
        ]);

        $material->update($attributes);

        return back()->with('message', "Wash Option Updated");
    }

    public function destroy(Material $material)
    {
        $material->delete();
        return to_route('materials.index')->with('message', "Wash Option Deleted");
    }
}
