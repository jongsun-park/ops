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
        Schema::create('urgencies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('wash_options', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('packings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('production_log', function (Blueprint $table) {
            $table->foreignId('production_id');
            $table->foreignId('status_id');
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::create('productions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained();

            $table->text('order_id')->nullable();
            $table->text('customer_name')->nullable();
            $table->text('weave_by')->nullable();
            $table->text('quantity')->nullable();
            $table->text('total_length')->nullable();
            $table->text('number_of_repeats')->nullable();
            $table->text('note')->nullable();

            $table->foreignId('urgency_id')->constrained()->noActionOnDelete();
            $table->foreignId('wash_option_id')->constrained()->noActionOnDelete();
            $table->foreignId('packing_id')->constrained()->noActionOnDelete();
            $table->foreignId('status_id')->constrained()->noActionOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productions');

        Schema::dropIfExists('urgencies');
        Schema::dropIfExists('wash_options');
        Schema::dropIfExists('packings');
        Schema::dropIfExists('statuses');
        Schema::dropIfExists('production_log');
        Schema::dropIfExists('productions');
    }
};
