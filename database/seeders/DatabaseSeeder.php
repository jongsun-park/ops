<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use App\Models\Production;
use App\Models\ProductionOrderStatus;
use App\Models\Yarn;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Yarn::factory(100)->create();

        // Product::factory(50)->create();


        // Production Factory without Status
        $productions = Production::factory(100)->create();

        foreach ($productions as $production) {
            // Connect Production with Status
            ProductionOrderStatus::factory()->create(([
                'production_id' =>  $production->id
            ]));
        }
    }
}
