<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Yarn>
 */
class YarnFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // If user is exist, using the first user id
        // If user is not exist, create new user
        // using same user for dummy data
        // TO DO: user data from current user idins
        $user_id = User::all()->first()?->id;
        if (!$user_id) $user_id = User::factory()->create()->id;

        return [
            'user_id' => $user_id,
            'sku' => 'sku-' . fake()->uuid(),
            'name' => fake()->words(3, true)
        ];
    }
}
