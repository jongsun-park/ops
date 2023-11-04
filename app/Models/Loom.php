<?php

namespace App\Models;

use App\Models\Yarn;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Loom extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function yarn()
    {
        return $this->belongsTo(Yarn::class);
    }
}
