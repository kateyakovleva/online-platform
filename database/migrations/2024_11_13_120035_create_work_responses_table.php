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
        Schema::create('work_responses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('resume_id')
                ->constrained('resumes')
                ->cascadeOnDelete();
            $table->foreignId('vacancy_id')
                ->constrained('vacancies')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_responses');
    }
};
