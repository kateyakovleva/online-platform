<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class InitDataSeeder extends Seeder
{
    public function run(): void
    {
        \DB::unprepared(file_get_contents(__DIR__ . '/init.sql'));
    }
}
