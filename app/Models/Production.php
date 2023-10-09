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

    public function urgency()
    {
        return $this->belongsTo(Urgency::class);
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
        return $this->belongsTo(Status::class);
    }
}
