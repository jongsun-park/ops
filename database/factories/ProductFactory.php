<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Yarn;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user_id = User::all()->first()?->id;
        if (!$user_id) $user_id = User::factory()->create()->id;

        $yarn_even_id = Yarn::factory()->create()->id;
        $yarn_odd_id = Yarn::factory()->create()->id;

        return [
            'user_id' => $user_id,
            'sku' => 'sku-' . fake()->uuid(),
            'name' => fake()->words(3, true),
            'description' => fake()->words(10, true),
            'yarn1_id' => $yarn_odd_id,
            'yarn2_id' => $yarn_even_id,
            'yarn3_id' => $yarn_odd_id,
            'yarn4_id' => $yarn_even_id,
        ];
    }
}
