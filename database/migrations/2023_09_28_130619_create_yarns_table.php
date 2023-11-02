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
        // Schema::create('grades', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        // });

        // Schema::create('colors', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        // });

        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->nullable();
        });

        // Schema::create('suppliers', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        // });

        Schema::create('yarns', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('user_id')->constrained()->noActionOnDelete();
            $table->string('sku')->unique();
            $table->text('colour')->nullable();
            $table->string('material_id')->constrained()->noActionOnDelete();
            $table->string('number')->nullable();
            $table->integer('core')->nullable();
            $table->integer('nm')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yarns');

        Schema::dropIfExists('grades');
        Schema::dropIfExists('colors');
        Schema::dropIfExists('colours');
        Schema::dropIfExists('materials');
        Schema::dropIfExists('suppliers');
    }
};
