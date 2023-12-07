<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Production extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function wash_option()
    {
        return $this->belongsTo(WashOption::class);
    }

    public function packing()
    {
        return $this->belongsTo(Packing::class);
    }

    public function status()
    {
        // return $this->production_order_status_id;
        return $this->hasOne(ProductionOrderStatus::class);
    }
}
