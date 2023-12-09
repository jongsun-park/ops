<?php

namespace App\Http\Controllers;

use App\Models\Corner;
use App\Models\HemSize;
use App\Models\HemType;
use App\Models\Label;
use App\Models\Loom;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Unit;
use App\Models\Yarn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index()
    {

        $products = Product::query()
            ->when(request('search'), function ($query, $search) {
                $query
                    ->where('products.name', 'like', "%{$search}%")
                    ->orWhere('products.sku', 'like', "%{$search}%");
            })
            ->orderByDesc('created_at')
            ->paginate(10)
            ->withQueryString()
            ->through(fn ($product) => [
                'id' => $product->id,
                'sku' => $product->sku,
                'name' => $product->name,
                'description' => $product->description,
                'created_at' => $product->created_at->diffForHumans(),
                'user_name' => $product->user->name,
            ]);

        $filters = request()->only(['search']);

        return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => $filters,
            'can' => [
                'create' => auth()->user()->can('create', Product::class)
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Products/Form', [
            'yarns' => Yarn::select('id', 'name')->orderBy('name')->get(),
            'units' => Unit::all()->toArray(),
            'looms' => Loom::all()->toArray(),
            'labels' => Label::all()->toArray(),
            'hem_types' => HemType::all()->toArray(),
            'hem_sizes' => HemSize::all()->toArray(),
            'corners' => Corner::all()->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate the request
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required|unique:products',
            'description' => 'required',
            'yarn1_id' => 'required',
            'yarn2_id' => 'required',
            'yarn3_id' => 'required',
            'yarn4_id' => 'required',

            'tf_number' => 'required',
            'divs' => 'required',
            'ppcm' => 'required',
            'pprepeat' => 'required',
            'cut_width' => 'required',
            'cut_length' => 'required',
            'finish_width' => 'required',
            'finish_length' => 'required',

            'unit_id' => 'required',
            'loom_id' => 'required',
            'label_id' => 'required',
            'hem_type_id' => 'required',
            'hem_size_id' => 'required',
            'corner_id' => 'required',

        ]);

        // create product
        $id = Product::create($attributes)->id;

        // redirect
        return to_route('products.show', ['product' => $id]);
    }

    public function show(Product $product)
    {
        $product_data = [
            'id' => $product->id,
            'name' => $product->name,
            'sku' => $product->sku,
            'description' => $product->description,
            'colour' => $product->colour,
            'tf_number' => $product->tf_number,
            'divs' => $product->divs,
            'ppcm' => $product->ppcm,
            'pprepeat' => $product->pprepeat,
            'cut_width' => $product->cut_width,
            'cut_length' => $product->cut_length,
            'finish_width' => $product->finish_width,
            'finish_length' => $product->finish_length,
            // 'unit_id' => $product->unit->id,
            'loom' => $product->loom,
            'label' => $product->label,
            'hem_type' => $product->hemType,
            'hem_size' => $product->hemSize,
            'corner' => $product->corner,
            'created_at' => $product->created_at->diffForHumans(),
            "yarn1" => $product->yarn1,
            "yarn2" => $product->yarn2,
            "yarn3" => $product->yarn3,
            "yarn4" => $product->yarn4,

        ];

        $user_data = [
            'id' => $product->user->id,
            'name' => $product->user->name,
            'email' => $product->user->email,
            'can' => [
                'update' => auth()->user()->can('update', $product),
                'delete' => auth()->user()->can('delete', $product),
            ]
        ];

        return Inertia::render('Products/Show', [
            'product' => $product_data,
            'user' => $user_data,
            'options' => [
                'yarns' => Yarn::select('id', 'sku')->orderBy('sku')->get(),
                'units' => Unit::all()->toArray(),
                'looms' => Loom::all()->toArray(),
                'labels' => Label::all()->toArray(),
                'hem_types' => HemType::all()->toArray(),
                'hem_sizes' => HemSize::all()->toArray(),
                'corners' => Corner::all()->toArray(),
            ]

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return to_route('products.show', $product->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $attributes = $request->validate([
            "created_at" => '',
            "cut_length" => '',
            "cut_width" => '',
            "description" => '',
            "divs" => '',
            "finish_length" => '',
            "finish_width" => '',
            "colour" => '',
            "name" =>  'required|max:255',
            "ppcm" => '',
            "pprepeat" => '',
            "sku" =>  'required|max:255',
            "tf_number" => '',
            "corner_id" => '',
            "hem_size_id" => '',
            "hem_type_id" => '',
            "label_id" => '',
            "loom_id" => '',
            "yarn1_id" => '',
            "yarn2_id" => '',
            "yarn3_id" => '',
            "yarn4_id" => '',
        ]);

        // update product
        $product->update($attributes);

        // redirect
        return back()->with('message', 'Product Updated');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return to_route('products.index');
    }
}
