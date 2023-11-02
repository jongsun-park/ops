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

        // if (!Grade::first()) {
        //     Grade::factory(5)->create();
        // }
        // if (!Color::first()) {
        //     Color::factory(5)->create();
        // }
        if (!Material::first()) {
            $materials = [
                ['name' => 'Cotton', 'code' => 'C'],
                ['name' => 'Linen', 'code' => 'LN'],
                ['name' => 'Hemp', 'code' => 'H'],
                ['name' => 'Poly Linen', 'code' => 'PL'],
                ['name' => 'Wool', 'code' => 'WO'],
                ['name' => 'Recycled Wool', 'code' => 'RW'],
                ['name' => 'Flax Linen', 'code' => 'FL'],
            ];

            foreach ($materials as $material) {
                Material::factory()->create($material);
            }
        }

        // if (!Supplier::first()) {
        //     Supplier::factory(5)->create();
        // }

        $material = Material::all()->random(1)->first();
        $number =  fake()->numberBetween(1, 200);
        $core = fake()->numberBetween(1, 10);
        $nm = fake()->numberBetween(0, 10);

        $sku = $material->code . $number . $core . $nm;

        return [
            'user_id' => $user_id,
            'sku' => $sku,
            'colour' => fake()->hexColor(), // Color::all()->random(1)->first()->id,
            'material_id' => $material->id,
            'number' => $number,
            'core' => $core,
            'nm' => $nm
        ];
    }
}
