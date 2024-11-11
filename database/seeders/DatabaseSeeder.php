<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Company;
use App\Models\Resume;
use App\Models\Vacancy;
use App\Models\Worker;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach ([1, 2, 3, 4] as $val) {
            /** @var Worker $worker */
            $worker = Worker::factory()->create();
            Resume::factory()->create(['customer_id' => $worker->id]);

            /** @var Company $company */
            $company = Company::factory()->create();

            Vacancy::factory(rand(2, 10))->create([
                'company_id' => $company->id,
            ]);
        }
    }
}
