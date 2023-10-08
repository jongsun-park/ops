<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Production;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductionController extends Controller
{
    public function index()
    {
        $productions = Production::query()
            ->when(request('search'), function ($query, $search) {
                $query
                    ->where('productions.order_id', 'like', "%{$search}%")
                    ->orWhere('productions.customer_name', 'like', "%{$search}%")
                    ->orWhere('productions.weave_by', 'like', "%{$search}%")
                    ->orWhere('productions.note', 'like', "%{$search}%");
            })
            ->orderByDesc('created_at')
            ->paginate(10)
            ->withQueryString()
            ->through(fn ($pro) => [
                'id' => $pro->id,
                'product' => [
                    'id' => $pro->product->id,
                    'name' => $pro->product->name,
                    'sku' => $pro->product->sku,
                    'description' => $pro->product->description,
                ],
                'created_at' => $pro->created_at->diffForHumans(),
                'created_by' => [
                    'id' => $pro->user->id,
                    'name' => $pro->user->name,
                    'email' => $pro->user->email,
                ],
                'order_id' => $pro->order_id,
                'customer_name' => $pro->customer_name,
                'weave_by' => $pro->weave_by,
                'note' => $pro->note,
                'status' => $pro->status,
                'can' => [
                    'edit' => auth()->user()->can('update', $pro)
                ]
            ]);

        $filters = request()->only(['search']);

        return Inertia::render('Productions/Index', [
            'productions' => $productions,
            'filters' => $filters,
            'can' => [
                'create' => auth()->user()->can('create', Production::class)
            ]
        ]);
    }

    public function show(Production $production)
    {

        $production_data = [
            'id' => $production->id,
            'created_at' => $production->created_at->diffForHumans(),
            'updated_at' => $production->updated_at->diffForHumans(),
            'product' => [
                'id' => $production->product->id,
                'name' => $production->product->name,
                'sku' => $production->product->sku,
                'description' => $production->product->description
            ],
            'written_by' => [
                'id' =>  $production->user->id,
                'name' =>  $production->user->name,
                'email' =>  $production->user->email
            ],
            'order_id' => $production->order_id,
            'customer_name' => $production->customer_name,
            'weave_by' => $production->weave_by,
            'quantity' => $production->quantity,
            'total_length' => $production->total_length,
            'note' => $production->note,
            'urgency' => $production->urgency,
            'wash_option' => $production->wash_option,
            'packing' => $production->packing,
            'status' => $production->status,
        ];

        $user_data = [
            'can' => [
                'create' => auth()->user()->can('create', Production::class),
                'update' => auth()->user()->can('update', $production),
                'delete' => auth()->user()->can('delete', $production),
            ]
        ];

        return Inertia::render('Productions/Show', [
            'production' => $production_data,
            'user' => $user_data,
        ]);
    }

    public function store(Request $request)
    {
        // validate the request
        $attributes = $request->validate([
            'product_id' => 'required|exists:App\Models\Product,id',
            'user_id' => 'required|exists:App\Models\User,id',
            'order_id' => '',
            'customer_name' => '',
            'weave_by' => '',
            'quantity' => '',
            'total_length' => '',
            'note' => '',
            'urgency' => '',
            'wash_option' => '',
            'packing' => '',
            'status' => '',
        ]);

        // create Production
        Production::create($attributes);

        // redirect
        return to_route('productions.index');
    }


    public function create()
    {
        $products = Product::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Productions/Create', [
            'products' => $products
        ]);
    }

    public function update(Request $request, Production $production)
    {
        $attributes = $request->validate([
            'product_id' => 'required|exists:App\Models\Product,id',
            'user_id' => 'required|exists:App\Models\User,id',
            'order_id' => '',
            'customer_name' => '',
            'weave_by' => '',
            'quantity' => '',
            'total_length' => '',
            'note' => '',
            'urgency' => '',
            'wash_option' => '',
            'packing' => '',
            'status' => '',
        ]);

        // update products
        $production->update($attributes);

        // redirect
        return to_route('productions.index');
    }





    public function destroy(Production $production)
    {
        $production->delete();
        return to_route('productions.index');
    }


    public function edit(Production $production)
    {
        $products = Product::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Productions/Edit', [
            'production' => $production,
            'products' => $products
        ]);
    }
}
