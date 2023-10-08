<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Yarn extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function grade()
    {
        return $this->belongsTo(Grade::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }
    public function material()
    {
        return $this->belongsTo(Material::class);
    }
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}
