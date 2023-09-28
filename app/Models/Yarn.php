<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Yarn extends Model
{
    use HasFactory;

    protected $guarded = [];


    // Yarn belongs to Many Products (Many to Many Relationship)
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
