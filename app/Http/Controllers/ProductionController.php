<?php

namespace App\Http\Controllers;

use App\Models\Packing;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Production;
use App\Models\ProductionOrderStatus;
use App\Models\Urgency;
use App\Models\WashOption;
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
                'product_name' =>  $pro->product->name,
                'created_at' => $pro->created_at->diffForHumans(),
                'created_by' => $pro->user->name,
                'order_id' => $pro->order_id,
                'customer_name' => $pro->customer_name,
                'weave_by' => $pro->weave_by,
                'note' => $pro->note,
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
            'product_name' => $production->product->name,
            'product_sku' => $production->product->sku,
            'product_description' => $production->product->description,

            'written_by' => $production->user->name,
            'order_id' => $production->order_id,
            'customer_name' => $production->customer_name,
            'weave_by' => $production->weave_by,
            'quantity' => $production->quantity,
            'total_length' => $production->total_length,
            'note' => $production->note,
            'urgency' => $production->urgency->name,
            'wash_option' => $production->wash_option->name,
            'packing' => $production->packing->name,
            'status' => $production->status,

            'user_id' => $production->user_id,
            'product_id' => $production->product_id,
        ];



        $user_data = [
            'can' => [
                'create' => auth()->user()->can('create', Production::class),
                'update' => auth()->user()->can('update', $production),
                'delete' => auth()->user()->can('delete', $production),
                'update_status' => auth()->user()->can('update_status', ProductionOrderStatus::class),
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
            'number_of_repeats' => '',
            'note' => '',
            'urgency_id' => '',
            'wash_option_id' => '',
            'packing_id' => '',
        ]);

        // create Production
        $id = Production::create($attributes)->id;

        // redirect
        return to_route('productions.show', ['production' => $id]);
    }


    public function create()
    {

        return Inertia::render('Productions/Form', [
            'products' => Product::select('id', 'name')->orderBy('name')->get(),
            'urgencies' => Urgency::all()->toArray(),
            'wash_options' => WashOption::all()->toArray(),
            'packings' => Packing::all()->toArray(),

        ]);
    }

    public function update(Request $request, Production $production)
    {

        $attributes = $request->validate([
            'product_id' => 'required|exists:App\Models\Product,id',
            'user_id' => 'required|exists:App\Models\User,id',
            // 'product_id' => '',
            // 'user_id' => '',
            'order_id' => '',
            'customer_name' => '',
            'weave_by' => '',
            'quantity' => '',
            'total_length' => '',
            'number_of_repeats' => '',
            'note' => '',
            'urgency_id' => '',
            'wash_option_id' => '',
            'packing_id' => '',
        ]);

        // update products
        $production->update($attributes);

        // redirect
        return back()->with('message', "Production Updated");
    }



    public function destroy(Production $production)
    {
        $production->delete();
        return to_route('productions.index');
    }


    public function edit(Production $production)
    {
        $products = Product::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Productions/Form', [
            'production' => $production,
            'products' => $products,
            'urgencies' => Urgency::all()->toArray(),
            'wash_options' => WashOption::all()->toArray(),
            'packings' => Packing::all()->toArray(),

        ]);
    }


    public function statusUpdate(ProductionOrderStatus $productionOrderStatus)
    {
        // TODO Validation
        $attributes = array_merge($productionOrderStatus->toArray(), request()->toArray());
        $productionOrderStatus->update($attributes);

        return back()->with('message', 'status updated');
    }
}
