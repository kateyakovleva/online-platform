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
        Schema::create('skill_to_vacancy', function (Blueprint $table) {
            $table->foreignId('vacancy_id')
                ->constrained('vacancies')
                ->cascadeOnDelete();
            $table->foreignId('skill_id')
                ->constrained('skills')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skill_to_vacancy');
    }
};
