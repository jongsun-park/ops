<?php

namespace Database\Factories;

use App\Models\Packing;
use App\Models\Product;
use App\Models\ProductionOrderStatus;
use App\Models\Urgency;
use App\Models\User;
use App\Models\WashOption;
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
        if (!$user_id) $user_id = User::factory()->create([
            'name' => 'Jongsun Park',
            'email' => 'jongsun250@gmail.com',
            'role' => 'admin',
            'password' => 'password123'
        ])->id;
        $product_id = Product::factory()->create()->id;

        if (!Urgency::first()) {
            Urgency::factory(5)->create();
        }

        if (!WashOption::first()) {
            WashOption::factory(5)->create();
        }

        if (!Packing::first()) {
            Packing::factory(5)->create();
        }

        return [
            'user_id' => $user_id,
            'product_id' => $product_id,

            'order_id' => fake()->words(1, true),
            'customer_name' => fake()->words(2, true),
            'weave_by' => fake()->words(1, true),
            'quantity' => fake()->words(1, true),
            'total_length' => fake()->words(1, true),
            'number_of_repeats' => fake()->words(1, true),
            'note' => fake()->words(3, true),

            'urgency_id' => Urgency::all()->random(1)->first()->id,
            'wash_option_id' => WashOption::all()->random(1)->first()->id,
            'packing_id' => Packing::all()->random(1)->first()->id,

            'production_order_status_id' => ProductionOrderStatus::factory()->create()->id

        ];
    }
}
