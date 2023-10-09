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
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('yarns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->noActionOnDelete();

            $table->string('sku')->unique();
            $table->string('name');

            $table->foreignId('grade_id')->constrained()->noActionOnDelete();
            $table->foreignId('color_id')->constrained()->noActionOnDelete();
            $table->foreignId('material_id')->constrained()->noActionOnDelete();
            $table->foreignId('supplier_id')->constrained()->noActionOnDelete();

            $table->timestamps();
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
        Schema::dropIfExists('materials');
        Schema::dropIfExists('suppliers');
    }
};
