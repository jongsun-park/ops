<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        if (request('role') === 'all') {
            return Inertia::render('Users/Index', [
                'users' => User::query()
                    ->orderByDesc('created_at')
                    ->paginate(10)
                    ->withQueryString()
                    ->through(fn ($user) => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'role' => $user->role,
                        'email' => $user->email,
                        'created_at' => $user->created_at->diffForHumans(),
                    ]),
                'can' => [
                    'create' => Auth::user()->isAdmin()
                ],
                'role' => 'all'
            ]);
        }

        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(request('role'), function ($query, $role) {
                    $query
                        ->where('users.role', 'like', "%{$role}%");
                })
                ->orderByDesc('created_at')
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'role' => $user->role,
                    'email' => $user->email,
                    'created_at' => $user->created_at->diffForHumans(),
                ]),
            'can' => [
                'create' => Auth::user()->isAdmin()
            ],
            'role' => request('role') ?? 'all'
        ]);
    }
}