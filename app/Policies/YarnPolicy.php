<?php

namespace App\Policies;

use App\Models\Yarn;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class YarnPolicy
{

    // admin, designer can create yarn
    public function create(User $user): bool
    {
        return $user->isAdmin() or in_array($user->role, ['admin', 'designer']);
    }

    // admin can update any yarn
    // designer can update own yarn
    public function update(User $user, Yarn $yarn): bool
    {
        return $user->isAdmin() or $user->id == $yarn->user_id;
    }

    // admin can delete yarn
    // designer can delete own yarn
    public function delete(User $user, Yarn $yarn): bool
    {
        return $user->isAdmin() or $user->id == $yarn->user_id;
    }
}
