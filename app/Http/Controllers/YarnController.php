<?php

namespace App\Http\Controllers;

use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class YarnController extends Controller
{
    public function index()
    {

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
                'can' => [
                    'edit' => true
                ]
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
        return Inertia::render('Yarns/Create');
    }

    public function store(Request $request)
    {
        // validate the request
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required|unique:yarns',
        ]);

        // create yarn
        Yarn::create($attributes);

        // redirect
        return to_route('yarns.index');
    }

    public function show(Yarn $yarn)
    {
        $yarn_data = [
            'id' => $yarn->id,
            'name' => $yarn->name,
            'sku' => $yarn->sku,
            'created_at' => $yarn->created_at->diffForHumans()
        ];

        $user_date = [
            'id' => $yarn->user->id,
            'name' => $yarn->user->name,
            'email' => $yarn->user->email,
            'can' => [
                'update' => true,
                'delete' => true
            ]
        ];

        return Inertia::render('Yarns/Show', [
            'yarn' => $yarn_data,
            'user' => $user_date
        ]);
    }

    public function edit(Yarn $yarn)
    {
        return Inertia::render('Yarns/Edit', [
            'yarn' => $yarn
        ]);
    }

    public function update(Request $request, Yarn $yarn)
    {
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required',
        ]);

        // update yarn
        $yarn->update($attributes);

        // redirect
        return to_route('yarns.index');
    }

    public function destroy(Yarn $yarn)
    {
        $yarn->delete();
        return to_route('yarns.index');
    }
}
