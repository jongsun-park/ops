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

        $filters = request()->only(['search']);

        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(request('role'), function ($query, $role) {
                    $query
                        ->where('users.role', 'like', "%{$role}%");
                })
                ->when(request('search'), function ($query, $search) {
                    $query
                        ->where('users.name', 'like', "%{$search}%")
                        ->orWhere('users.email', 'like', "%{$search}%")
                        ->orWhere('users.role', 'like', "%{$search}%");
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
            'role' => request('role') ?? 'all',
            'filters' => $filters
        ]);
    }

    public function edit(User $user)
    {

        return Inertia::render('Users/Form', [
            'user' => $user,
        ]);
    }

    public function update(User $user, Request $request)
    {

        $attributes = $request->validate([
            'name' => 'required',
            'role' => 'required',
            'email' => 'required|email',
        ]);

        // update user
        $user->update($attributes);

        // redirect
        return to_route('users.index');
    }

    public function destroy(User $user)
    {

        if ($user->isAdmin()) {
            return to_route('users.index')->with('error', 'You can not delete Admin user');
        }

        $user->delete();
        return to_route('users.index')->with('success', 'Success to delete user');
    }
}
