<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductionOrderStatus extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function production()
    {
        return $this->belongsTo(Production::class);
    }
}
