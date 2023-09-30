<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function yarn1()
    {
        return $this->belongsTo(Yarn::class);
    }

    public function yarn2()
    {
        return $this->belongsTo(Yarn::class);
    }

    public function yarn3()
    {
        return $this->belongsTo(Yarn::class);
    }

    public function yarn4()
    {
        return $this->belongsTo(Yarn::class);
    }
}
