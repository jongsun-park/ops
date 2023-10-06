<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
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
                'name' => $product->name,
                'sku' => $product->sku,
                'yarns' => [
                    $product->yarn1,
                    $product->yarn2,
                    $product->yarn3,
                    $product->yarn4,
                ],
                'created_at' => $product->created_at,
                'user_id' => $product->user->id,
                'user_name' => $product->user->name,
                'user_email' => $product->user->email,
                'can' => [
                    'edit' => true
                ]
            ]);

        $filters = request()->only(['search']);

        return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => $filters,
            'can' => [
                'create' => Auth::user()->can('create', User::class)
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $yarns = Yarn::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Products/Create', [
            'yarns' => $yarns
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
            'description' => '',
            'yarn1_id' => '',
            'yarn2_id' => '',
            'yarn3_id' => '',
            'yarn4_id' => '',
        ]);

        // create product
        Product::create($attributes);

        // redirect
        return to_route('products.index');
    }

    public function show(Product $product)
    {
        $product_data = [
            'id' => $product->id,
            'name' => $product->name,
            'sku' => $product->sku,
            'description' => $product->description,
            'created_at' => $product->created_at->diffForHumans()
        ];

        $yarns_data = [
            "yarn1" => $product->yarn1,
            "yarn2" => $product->yarn2,
            "yarn3" => $product->yarn3,
            "yarn4" => $product->yarn4,
        ];

        $user_date = [
            'id' => $product->user->id,
            'name' => $product->user->name,
            'email' => $product->user->email,
            'can' => [
                'update' => true,
                'delete' => true
            ]
        ];

        return Inertia::render('Products/Show', [
            'product' => $product_data,
            'yarns' => $yarns_data,
            'user' => $user_date
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $yarns = Yarn::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'yarns' => $yarns
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $attributes = $request->validate([
            'user_id' => 'required',
            'name' => 'required|max:255',
            'sku' => 'required',
            'description' => '',
            'yarn1_id' => '',
            'yarn2_id' => '',
            'yarn3_id' => '',
            'yarn4_id' => '',
        ]);

        // update product
        $product->update($attributes);

        // redirect
        return to_route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return to_route('products.index');
    }
}
