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
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')
                ->constrained('customers')
                ->cascadeOnDelete();
            $table->foreignId('specialization_id')
                ->constrained('specializations')
                ->cascadeOnDelete();
            $table->text('vacancy')->nullable();
            $table->text('courses')->nullable();
            $table->text('interesting')->nullable();
            $table->foreignId('city_id');
            $table->string('format')->nullable();
            $table->text('finances')->nullable();
            $table->text('comment')->nullable();
            $table->text('file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
