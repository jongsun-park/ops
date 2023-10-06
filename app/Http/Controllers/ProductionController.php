<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductionController extends Controller
{
    // $productions = App\Models\Production::with('product')->first();
    public function index()
    {
        return "production";
    }
}
