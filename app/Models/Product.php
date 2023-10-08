<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

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

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
    public function loom()
    {
        return $this->belongsTo(Loom::class);
    }
    public function label()
    {
        return $this->belongsTo(Label::class);
    }
    public function hemType()
    {
        return $this->belongsTo(HemType::class);
    }
    public function hemSize()
    {
        return $this->belongsTo(hemSize::class);
    }
    public function corner()
    {
        return $this->belongsTo(Corner::class);
    }
}
