<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WashOption>
 */
class WashOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'machine_name' => fake()->words(2, true),
            'machine_program' => fake()->words(3, true),
            'dryer_name' => fake()->words(1, true),
            'dryer_program' => fake()->words(2, true),
            'detergent_type' => fake()->words(1, true),
            'detergent_amount' => "100 ml",
            'oba' => fake()->words(1, true),
            'softener' => "200 ml",
            'other' => fake()->paragraph(1)
        ];
    }
}
