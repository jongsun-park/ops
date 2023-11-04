<?php

namespace App\Http\Controllers;

use App\Models\Loom;
use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LoomController extends Controller
{
    public function index()
    {
        return Inertia::render('Options/Looms', [
            "looms" => Loom::with('yarn')->latest('updated_at')->get(),
            "yarns" => Yarn::select('id', 'sku as name')->get()
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'yarn_id' => 'exists:App\Models\Yarn,id',
            'name' => 'required',
            'density' => '',
            'speed' => '',
            'make' => ''
        ]);

        Loom::create($attributes);

        return to_route('looms.index')->with('message', 'Loom Added');
    }


    public function update(Request $request, Loom $loom)
    {
        $attributes = $request->validate([
            'yarn_id' => 'exists:App\Models\Yarn,id',
            'name' => 'required',
            'density' => '',
            'speed' => '',
            'make' => ''
        ]);

        $loom->update($attributes);

        return back()->with('message', "Loom Updated");
    }

    public function destroy(Loom $loom)
    {
        $loom->delete();
        return to_route('looms.index')->with('message', 'Loom Deleted');
    }
}
