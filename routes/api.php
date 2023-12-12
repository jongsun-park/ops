<?php

use App\Models\Production;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductionController;

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

Route::get('/productions', function () {
    $filter = request('filter');

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
        ->get();

    return response()->json([
        'productions' => $productions
    ]);
});
