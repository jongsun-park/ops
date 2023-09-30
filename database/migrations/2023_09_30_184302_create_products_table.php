<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('yarn1_id')->constrained('yarns');
            $table->foreignId('yarn2_id')->constrained('yarns');
            $table->foreignId('yarn3_id')->constrained('yarns');
            $table->foreignId('yarn4_id')->constrained('yarns');


            $table->string('name')->unique();
            $table->string('sku')->unique();
            $table->text('description');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
