<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Resume;
use App\Models\Skill;
use App\Models\Specialization;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resume>
 */
class ResumeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
//            'customer_id' => Worker::factory(),
            'vacancy' => $this->faker->jobTitle,
            'courses' => $this->faker->paragraph,
            'interesting' => $this->faker->paragraph,
            'format' => $this->faker->paragraph,
            'finances' => $this->faker->paragraph,
            'comment' => $this->faker->paragraph,
            'specialization_id' => Specialization::first()->id,
            'city_id' => City::first()->id,
        ];
    }

    public function configure(): Factory
    {
        return $this->afterCreating(function (Resume $model) {
            $skills = Skill::factory(rand(3, 20))->create();
            $model->skills()->attach($skills);
        });
    }
}
