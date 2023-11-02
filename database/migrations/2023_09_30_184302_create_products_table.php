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

        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('looms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('labels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('hem_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('hem_sizes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('corners', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });


        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();

            $table->foreignId('yarn1_id')->constrained('yarns');
            $table->foreignId('yarn2_id')->constrained('yarns');
            $table->foreignId('yarn3_id')->constrained('yarns');
            $table->foreignId('yarn4_id')->constrained('yarns');

            $table->string('name')->unique();
            $table->string('sku')->unique();
            $table->string('description')->nullable();
            $table->string('colour')->nullable();

            $table->string('tf_number')->nullable();
            $table->string('divs')->nullable();
            $table->string('ppcm')->nullable();
            $table->string('pprepeat')->nullable();
            $table->string('cut_width')->nullable();
            $table->string('cut_length')->nullable();
            $table->string('finish_width')->nullable();
            $table->string('finish_length')->nullable();

            $table->foreignId('unit_id')->constrained()->noActionOnDelete();
            $table->foreignId('loom_id')->constrained()->noActionOnDelete();
            $table->foreignId('label_id')->constrained()->noActionOnDelete();
            $table->foreignId('hem_type_id')->constrained()->noActionOnDelete();
            $table->foreignId('hem_size_id')->constrained()->noActionOnDelete();
            $table->foreignId('corner_id')->constrained()->noActionOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');

        Schema::dropIfExists('units');
        Schema::dropIfExists('looms');
        Schema::dropIfExists('labels');
        Schema::dropIfExists('hem_types');
        Schema::dropIfExists('hem_sizes');
        Schema::dropIfExists('corners');
    }
};
