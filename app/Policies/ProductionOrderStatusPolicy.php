<?php

namespace App\Policies;

use App\Models\ProductionOrderStatus;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProductionOrderStatusPolicy
{

    public function update_status(User $user): bool
    {
        if ($user->role === "guest") return false;
        return true;
    }
}
