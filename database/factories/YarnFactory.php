<?php

namespace Database\Factories;

use App\Models\Color;
use App\Models\Grade;
use App\Models\Material;
use App\Models\Supplier;
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

        if (!Grade::first()) {
            Grade::factory(5)->create();
        }
        if (!Color::first()) {
            Color::factory(5)->create();
        }
        if (!Material::first()) {
            Material::factory(5)->create();
        }
        if (!Supplier::first()) {
            Supplier::factory(5)->create();
        }

        return [
            'user_id' => $user_id,
            'sku' => 'sku-' . fake()->uuid(),
            'name' => fake()->words(3, true),
            'grade_id' => Grade::all()->random(1)->first()->id,
            'color_id' => Color::all()->random(1)->first()->id,
            'material_id' => Material::all()->random(1)->first()->id,
            'supplier_id' => Supplier::all()->random(1)->first()->id,
        ];
    }
}
