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
            $table->text('note')->nullable();

            $table->text('urgency')->nullable(); // FK
            $table->text('wash_option')->nullable(); // FK
            $table->text('packing')->nullable(); // FK
            $table->text('status')->nullable(); // FK
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productions');
    }
};
