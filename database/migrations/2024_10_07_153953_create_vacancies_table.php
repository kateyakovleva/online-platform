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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')
                ->constrained('customers')
                ->cascadeOnDelete();
            $table->foreignId('specialization_id')
                ->constrained('specializations')
                ->cascadeOnDelete();
            $table->text('vacancy')->nullable();
            $table->text('skills_description')->nullable();
            $table->text('description')->nullable();
            $table->text('growth_description')->nullable();
            $table->foreignId('city_id');
            $table->string('format')->nullable();

            $table->integer('price_from')->nullable();
            $table->integer('price_to')->nullable();
            $table->boolean('price_by_agree')->default(false);

            $table->text('benefits')->nullable();
            $table->text('comment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
