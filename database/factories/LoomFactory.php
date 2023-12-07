<?php

namespace Database\Factories;

use App\Models\Yarn;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loom>
 */
class LoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */



    public function definition(): array
    {
        $yarn_id = Yarn::first() ? Yarn::first()->id : Yarn::factory()->create()->id;

        return [
            'name' => fake()->words(1, true),
            'yarn_id' => $yarn_id
        ];
    }
}
