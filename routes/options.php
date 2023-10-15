<?php

use App\Models\Loom;
use App\Models\Unit;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Grade;
use App\Models\Label;
use App\Models\Corner;
use App\Models\Status;
use App\Models\HemSize;
use App\Models\HemType;
use App\Models\Packing;
use App\Models\Urgency;
use App\Models\Material;
use App\Models\Supplier;
use App\Models\WashOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    // Options

    Route::get('/options', function () {
        return Inertia::render('Options/Index', [
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
        ]);
    })->name('options.index');


    // colors
    Route::post('/options/colors', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Color::create($attributes);
    });

    Route::post('/options/colors/{color}', function (Request $request, Color $color) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $color->update($attributes);
    });

    Route::delete('/options/colors/{color}', function (Color $color) {
        $color->delete();
    });

    // corner
    Route::post('/options/corners', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Corner::create($attributes);
    });

    Route::post('/options/corners/{corner}', function (Request $request, Corner $corner) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $corner->update($attributes);
    });

    Route::delete('/options/corners/{corner}', function (Corner $corner) {
        $corner->delete();
    });


    // "grades"
    Route::post('/options/grades', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Grade::create($attributes);
    });

    Route::post('/options/grades/{grade}', function (Request $request, Grade $grade) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $grade->update($attributes);
    });

    Route::delete('/options/grades/{grade}', function (Grade $grade) {
        $grade->delete();
    });

    // "hem_sizes"
    Route::post('/options/hem_sizes', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        HemSize::create($attributes);
    });

    Route::post('/options/hem_sizes/{hem_size}', function (Request $request, HemSize $hem_size) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $hem_size->update($attributes);
    });

    Route::delete('/options/hem_sizes/{hem_size}', function (HemSize $hem_size) {
        $hem_size->delete();
    });


    // "hem_types"
    Route::post('/options/hem_types', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        HemType::create($attributes);
    });

    Route::post('/options/hem_types/{hem_type}', function (Request $request, HemType $hem_type) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $hem_type->update($attributes);
    });

    Route::delete('/options/hem_types/{hem_type}', function (HemType $hem_type) {
        $hem_type->delete();
    });

    // "labels"
    Route::post('/options/labels', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Label::create($attributes);
    });

    Route::post('/options/labels/{label}', function (Request $request, Label $label) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $label->update($attributes);
    });

    Route::delete('/options/labels/{label}', function (Label $label) {
        $label->delete();
    });

    // "looms"
    Route::post('/options/looms', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Loom::create($attributes);
    });

    Route::post('/options/looms/{loom}', function (Request $request, Loom $loom) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $loom->update($attributes);
    });

    Route::delete('/options/looms/{loom}', function (Loom $loom) {
        $loom->delete();
    });

    // "materials"
    Route::post('/options/materials', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Material::create($attributes);
    });

    Route::post('/options/materials/{material}', function (Request $request, Material $material) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $material->update($attributes);
    });

    Route::delete('/options/materials/{material}', function (Material $material) {
        $material->delete();
    });

    // "packings"
    Route::post('/options/packings', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Packing::create($attributes);
    });

    Route::post('/options/packings/{packing}', function (Request $request, Packing $packing) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $packing->update($attributes);
    });

    Route::delete('/options/packings/{packing}', function (Packing $packing) {
        $packing->delete();
    });

    // "statuses"
    Route::post('/options/statuses', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Status::create($attributes);
    });

    Route::post('/options/statuses/{statuse}', function (Request $request, Status $status) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $status->update($attributes);
    });

    Route::delete('/options/statuses/{Status}', function (Status $status) {
        $status->delete();
    });

    // "suppliers"
    Route::post('/options/suppliers', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Supplier::create($attributes);
    });

    Route::post('/options/suppliers/{supplier}', function (Request $request, Supplier $supplier) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $supplier->update($attributes);
    });

    Route::delete('/options/suppliers/{supplier}', function (Supplier $supplier) {
        $supplier->delete();
    });

    // "units"
    Route::post('/options/units', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Unit::create($attributes);
    });

    Route::post('/options/units/{unit}', function (Request $request, Unit $unit) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $unit->update($attributes);
    });

    Route::delete('/options/units/{unit}', function (Unit $unit) {
        $unit->delete();
    });

    // "urgencies"
    Route::post('/options/urgencies', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        Urgency::create($attributes);
    });

    Route::post('/options/urgencies/{urgency}', function (Request $request, Urgency $urgency) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $urgency->update($attributes);
    });

    Route::delete('/options/urgencies/{urgency}', function (Urgency $urgency) {
        $urgency->delete();
    });

    // "wash_options"
    Route::post('/options/wash_options', function (Request $request) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        WashOption::create($attributes);
    });

    Route::post('/options/wash_options/{wash_option}', function (Request $request, WashOption $wash_option) {
        $attributes = $request->validate(
            ['name' => 'required']
        );
        $wash_option->update($attributes);
    });

    Route::delete('/options/wash_options/{wash_option}', function (WashOption $wash_option) {
        $wash_option->delete();
    });
});
