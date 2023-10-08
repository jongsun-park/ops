<?php

namespace Database\Factories;

use App\Models\Corner;
use App\Models\Loom;
use App\Models\Unit;
use App\Models\User;
use App\Models\Yarn;
use App\Models\Label;
use App\Models\HemSize;
use App\Models\HemType;
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

        if (!Unit::first()) {
            Unit::factory(5)->create();
        }
        if (!Loom::first()) {
            Loom::factory(5)->create();
        }
        if (!Label::first()) {
            Label::factory(5)->create();
        }
        if (!HemType::first()) {
            HemType::factory(5)->create();
        }
        if (!HemSize::first()) {
            HemSize::factory(5)->create();
        }
        if (!Corner::first()) {
            Corner::factory(5)->create();
        }

        return [
            'user_id' => $user_id,
            'sku' => 'sku-' . fake()->uuid(),
            'name' => fake()->words(3, true),
            'description' => fake()->words(10, true),
            'yarn1_id' => $yarn_odd_id,
            'yarn2_id' => $yarn_even_id,
            'yarn3_id' => $yarn_odd_id,
            'yarn4_id' => $yarn_even_id,

            'tf_number' => fake()->words(2, true),
            'divs' => fake()->words(2, true),
            'ppcm' => fake()->words(2, true),
            'pprepeat' => fake()->words(2, true),
            'cut_width' => fake()->words(2, true),
            'cut_length' => fake()->words(2, true),
            'finish_width' => fake()->words(2, true),
            'finish_length' => fake()->words(2, true),

            'unit_id' => Unit::all()->random(1)->first()->id,
            'loom_id' => Loom::all()->random(1)->first()->id,
            'label_id' => Label::all()->random(1)->first()->id,
            'hem_type_id' => HemType::all()->random(1)->first()->id,
            'hem_size_id' => HemSize::all()->random(1)->first()->id,
            'corner_id' => Corner::all()->random(1)->first()->id,
        ];
    }
}
