<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\=ProductionOrderStatus>
 */
class ProductionOrderStatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'loom_status' => false,
            'woven_status' => false,
            'cut_status' => false,
            'stitch_status' => false,
            'laundry_status' => false,
        ];
    }
}
