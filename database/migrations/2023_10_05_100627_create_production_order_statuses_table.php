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
        // Schema::table('productions', function (Blueprint $table) {
        //     $table->foreignId('production_order_status_id');
        // });


        Schema::create('production_order_statuses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('production_id');

            $table->boolean('loom_status')->default(false);
            $table->text('loom_updated_by')->nullable();
            $table->text('loom_updated_at')->nullable();

            $table->boolean('woven_status')->default(false);
            $table->text('woven_updated_by')->nullable();
            $table->text('woven_updated_at')->nullable();

            $table->boolean('cut_status')->default(false);
            $table->text('cut_updated_by')->nullable();
            $table->text('cut_updated_at')->nullable();

            $table->boolean('stitch_status')->default(false);
            $table->text('stitch_updated_by')->nullable();
            $table->text('stitch_updated_at')->nullable();

            $table->boolean('laundry_status')->default(false);
            $table->text('laundry_updated_by')->nullable();
            $table->text('laundry_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('production_order_statuses');
    }
};
