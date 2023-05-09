<?php

namespace Database\Factories;

use App\Models\Grade;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TimeLog>
 */
class TimeLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'seconds' => fake()->numberBetween(1800, 5400),
            'student_id' => Student::inRandomOrder()->first()->id ?? Student::factory()->create()->id,
            'subject_id' => Subject::inRandomOrder()->first()->id ?? Subject::factory()->create()->id,
            'grade_id' => Grade::inRandomOrder()->first()->id ?? Grade::factory()->create()->id,
        ];
    }
}
