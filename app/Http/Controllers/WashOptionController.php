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
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'machine_name' => 'required|max:255',
            'machine_program' => 'required|max:255',
            'dryer_name' => 'required|max:255',
            'dryer_program' => 'required|max:255',
            'detergent_type' => '',
            'detergent_amount' => '',
            'oba' => '',
            'softener' => '',
            'other' => '',
        ]);

        $id = WashOption::create($attributes)->id;

        return to_route('wash_options.index', ['id' => $id])->with('message', "Wash Option Created");
    }


    public function update(Request $request, WashOption $washOption)
    {
        $attributes = $request->validate([
            'machine_name' => 'required|max:255',
            'machine_program' => 'required|max:255',
            'dryer_name' => 'required|max:255',
            'dryer_program' => 'required|max:255',
            'detergent_type' => '',
            'detergent_amount' => '',
            'oba' => '',
            'softener' => '',
            'other' => '',
        ]);

        $washOption->update($attributes);

        return back()->with('message', "Wash Option Updated");
    }

    public function destroy(WashOption $washOption)
    {
        $washOption->delete();
        return to_route('wash_options.index', ['id' => 0])->with('message', "Wash Option Deleted");
    }
}
