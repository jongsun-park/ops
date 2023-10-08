<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProductPolicy
{

    // admin, designer can create product
    public function create(User $user): bool
    {
        return $user->isAdmin() or in_array($user->role, ['admin', 'designer']);
    }

    // admin can update any product
    // designer can update own product
    public function update(User $user, Product $product): bool
    {
        return $user->isAdmin() or $user->id == $product->user_id;
    }

    // admin can delete product
    // designer can delete own product
    public function delete(User $user, Product $product): bool
    {
        return $user->isAdmin() or $user->id == $product->user_id;
    }
}
