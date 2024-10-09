<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->index();
            $table->string('name');
            $table->string('image');
            $table->string('email')->unique();
            $table->string('password');
            $table->json('data')->nullable();
            $table->foreignId('tariff_id')
                ->nullable()
                ->constrained('tariffs')
                ->cascadeOnUpdate();
            $table->timestamp('tariff_end_of')
                ->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
