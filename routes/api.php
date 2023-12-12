<?php

use App\Models\Production;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductionController;
use App\Models\ProductionOrderStatus;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/productions/filter/{filter?}', function ($filter = "all") {
    // $filter = request('filter');

    // productions - any status is 0
    if (empty($filter) or $filter == "all") {
        $productions = DB::table('productions')
            ->join('production_order_statuses', 'productions.id', '=', 'production_order_statuses.production_id')
            ->select('productions.*', 'production_order_statuses.*')
            ->where('loom_status', '=', 0)
            ->orWhere('woven_status', '=', 0)
            ->orWhere('cut_status', '=', 0)
            ->orWhere('stitch_status', '=', 0)
            ->orWhere('laundry_status', '=', 0)
            ->orderBy('date_weave_by', 'asc')
            ->limit(12)
            ->get();

        return response()->json([
            'productions' => $productions
        ]);
    }

    // not valide filter
    $filters = ['loom', 'woven', 'cut', 'stitch', 'laundry'];
    if (array_search($filter, $filters) === false) {
        return response()->json([
            'productions' => [],
            'error' => 'Please select valid filter'
        ]);
    }


    // get production on status tables when filter status is 0
    $notCompleteProductions = DB::table('production_order_statuses')
        ->select("production_id")
        ->where("{$filter}_status", 0);

    // get productions info using productions id array
    $productions = DB::table('productions')
        ->joinSub($notCompleteProductions, 'not_complete', function ($join) {
            $join->on('productions.id', '=', 'not_complete.production_id');
        })
        ->join('production_order_statuses', 'productions.id', '=', 'production_order_statuses.production_id')
        ->select('productions.*', 'production_order_statuses.*')
        ->orderBy('date_weave_by', 'asc')
        ->limit(12)
        ->get();

    return response()->json([
        'productions' => $productions
    ]);
});


Route::get('/productions/urgency', function () {
    // not complted productions
    $productions = DB::table('productions')
        ->join('production_order_statuses', 'productions.id', '=', 'production_order_statuses.production_id')
        ->select(
            'productions.id',
            'productions.date_weave_by',
            'production_order_statuses.loom_status',
            'production_order_statuses.woven_status',
            'production_order_statuses.cut_status',
            'production_order_statuses.stitch_status',
            'production_order_statuses.laundry_status'
        )
        ->where('loom_status', '=', 0)
        ->orWhere('woven_status', '=', 0)
        ->orWhere('cut_status', '=', 0)
        ->orWhere('stitch_status', '=', 0)
        ->orWhere('laundry_status', '=', 0)
        ->orderBy('date_weave_by', 'asc')
        ->limit(12)
        ->get();


    return response()->json([
        'productions' => $productions
    ]);
});

Route::get('/stats', function () {
    // TODO: Filter - Date range
    $productions = [
        'total' => Production::count(),
        'incomplete' => ProductionOrderStatus::where('loom_status', '=', '0')
            ->where('loom_status', '=', '0')
            ->where('woven_status', '=', '0')
            ->where('cut_status', '=', '0')
            ->where('stitch_status', '=', '0')
            ->where('laundry_status', '=', '0')->count(),
        'loom_incomplete' => ProductionOrderStatus::where('loom_status', '=', '0')->count(),
        'woven_incomplete' => ProductionOrderStatus::where('woven_status', '=', '0')->count(),
        'cut_incomplete' => ProductionOrderStatus::where('cut_status', '=', '0')->count(),
        'stitch_incomplete' => ProductionOrderStatus::where('stitch_status', '=', '0')->count(),
        'laundry_incomplete' => ProductionOrderStatus::where('laundry_status', '=', '0')->count(),
    ];


    return response()->json([
        'productions' => $productions
    ]);
});
