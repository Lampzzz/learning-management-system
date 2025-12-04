<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|in:student,instructor,admin',
            'password' => 'required|min:6'
        ],
        [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'Invalid Email Format',
            'email.unique' => 'Email is already taken',
            'role.required' => 'Role is required',
            'role.in' => 'Invalid Role Value',
            'password.required' => 'Password is required',
            'password.min' => 'Password minimum length is 6',
        ]);

        $user = User::create($validated);

        return response()->json([
            'message' => 'User Created Successfully!',
            'user' => $user
        ], 201);
    }
}
