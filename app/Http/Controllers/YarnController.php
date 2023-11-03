<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\Grade;
use App\Models\Material;
use App\Models\Supplier;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class YarnController extends Controller
{
    public function index()
    {

        // Yarn::with(['grade', 'color', 'material', 'supplier'])->find(2)

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
                'created_at' => $yarn->created_at->diffForHumans(),
                'user_name' => $yarn->user->name,
                'colour' => $yarn->colour,
                'material' => $yarn->material->name,
            ]);

        $filters = request()->only(['search']);

        return Inertia::render('Yarns/Index', [
            'yarns' => $yarns,
            'filters' => $filters,
            'can' => [
                'create' => Auth::user()->can('create', User::class)
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Yarns/Form', [
            // 'colors' => Color::all()->toArray(),
            // 'grades' => Grade::all()->toArray(),
            // 'suppliers' => Supplier::all()->toArray(),
            'materials' => Material::all()->toArray(),
        ]);
    }

    public function store(Request $request)
    {
        // validate the request
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required|unique:yarns',
            'color_id' => 'required',
            'grade_id' => 'required',
            'material_id' => 'required',
            'supplier_id' => 'required',
        ]);

        // create yarn
        $id = Yarn::create($attributes)->id;

        // redirect
        return to_route('yarns.show', ['yarn' => $id]);
    }

    public function show(Yarn $yarn)
    {
        $yarn_data = [
            'id' => $yarn->id,
            // 'created_at' => date_format($yarn->created_at, 'Y-m-d'),  // ->diffForHumans(),
            'colour' => $yarn->colour,
            'sku' => $yarn->sku,
            'material_id' => $yarn->material->id,
            'number' => $yarn->number,
            'core' => $yarn->core,
            'nm' => $yarn->nm,
        ];

        $user_date = [
            'id' => $yarn->user->id,
            'name' => $yarn->user->name,
            'email' => $yarn->user->email,
            'can' => [
                'update' => Auth::user()->can('update', $yarn),
                'delete' => Auth::user()->can('delete', $yarn),
            ]
        ];

        return Inertia::render('Yarns/Show', [
            'yarn' => $yarn_data,
            'user' => $user_date,
            'options' => [
                'materials' => Material::all()->toArray()
            ]
        ]);
    }

    public function edit(Yarn $yarn)
    {
        return to_route('yarns.show', $yarn->id);
    }

    public function update(Request $request, Yarn $yarn)
    {
        $attributes = $request->validate([
            'sku' => 'required',
            'colour' => '',
            'material_id' => '',
            'number' => '',
            'core' => '',
            'nm' => '',
        ]);

        // update yarn
        $yarn->update($attributes);

        // redirect
        return back()->with('message', "Yarn Updated");
    }

    public function destroy(Yarn $yarn)
    {
        $yarn->delete();
        return to_route('yarns.index');
    }
}
