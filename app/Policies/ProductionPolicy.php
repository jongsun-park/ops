<?php

namespace App\Policies;

use App\Models\Production;
use App\Models\User;

class ProductionPolicy
{

    // admin, designer can create production
    public function create(User $user): bool
    {
        return $user->isAdmin() or in_array($user->role, ['admin', 'designer']);
    }

    // admin can update any production
    // designer can update own production
    public function update(User $user, Production $production): bool
    {
        return $user->isAdmin() or $user->id == $production->user_id;
    }

    // admin, designer, updator can update production status
    public function updateStatus(User $user): bool
    {
        return $user->isAdmin() or in_array($user->role, ['admin', 'designer', 'updator']);
    }


    // admin can delete production
    // designer can delete own production
    public function delete(User $user, Production $production): bool
    {
        return $user->isAdmin() or $user->id == $production->user_id;
    }
}
