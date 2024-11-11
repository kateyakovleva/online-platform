<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Skill;
use App\Models\Specialization;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vacancy>
 */
class VacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
//            'company_id' => Company::factory(),
            'specialization_id' => Specialization::first()->id,
            'vacancy' => $this->faker->paragraph,
            'skills_description' => $this->faker->paragraph,
            'description' => $this->faker->paragraph,
            'growth_description' => $this->faker->paragraph,
            'city_id' => City::first()->id,
            'format' => $this->faker->paragraph,
            'price_from' => rand(100000, 500000),
            'price_to' => rand(100000, 1000000),
            'price_by_agree' => 0,
            'benefits' => $this->faker->paragraph,
            'comment' => $this->faker->paragraph,
        ];
    }

    public function configure(): Factory
    {
        return $this->afterCreating(function (Vacancy $model) {
            $skills = Skill::factory(rand(3, 20))->create();
            $model->skills()->attach($skills);
        });
    }
}
