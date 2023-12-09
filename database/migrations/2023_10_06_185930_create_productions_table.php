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

        Schema::create('wash_options', function (Blueprint $table) {
            $table->id();
            $table->string('machine_name')->nullable();
            $table->string('machine_program')->nullable();
            $table->string('dryer_name')->nullable();
            $table->string('dryer_program')->nullable();
            $table->string('detergent_type')->nullable();
            $table->string('detergent_amount')->nullable();
            $table->string('oba')->nullable();
            $table->string('softener')->nullable();
            $table->string('other')->nullable();
        });

        Schema::create('packings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('productions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('date_weave_by'); // date
            $table->date('date_started')->nullable(); // date
            $table->date('date_examined')->nullable(); // date
            $table->date('date_washed')->nullable(); //
            $table->date('date_shipped')->nullable(); // date

            $table->foreignId('product_id')->nullable();
            $table->foreignId('user_id')->constrained();

            $table->string('order_id')->nullable();
            $table->string('customer_name')->nullable();
            $table->string('quantity')->nullable();
            $table->string('total_length')->nullable();
            $table->string('number_of_repeats')->nullable();
            $table->string('note')->nullable();
            $table->string('nc_number')->nullable();

            $table->string('urgency')->nullable();
            // It should be calculate and then save
            // when index is loaded then check unfulfillted production
            // then update its urgencies
            // required due date


            $table->foreignId('wash_option_id')->constrained();
            $table->foreignId('packing_id')->constrained();

            $table->foreignId('production_order_status_id')->nullable();
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
