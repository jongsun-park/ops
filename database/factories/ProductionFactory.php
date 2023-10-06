<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Production>
 */
class ProductionFactory extends Factory
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
        $product_id = Product::factory()->create()->id;

        return [
            'user_id' => $user_id,
            'product_id' => $product_id,

            'order_id' => fake()->words(1, true),
            'customer_name' => fake()->words(2, true),
            'weave_by' => fake()->words(1, true),
            'quantity' => fake()->words(1, true),
            'total_length' => fake()->words(1, true),
            'note' => fake()->words(3, true),

            'urgency' => fake()->words(1, true),
            'wash_option' => fake()->words(1, true),
            'packing' => fake()->words(1, true),
            'status' => fake()->words(1, true),
        ];
    }
}
