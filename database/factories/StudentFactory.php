<?php

namespace Database\Factories;

use App\Models\Grade;
use App\Models\Student;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'type' => 'student',
            'avatar' => fake()->imageUrl(512, 512, 'cats'),
        ];
    }

    /**
     * Attach the user to a team.
     */
    public function onTeam(): static
    {
        return $this->afterCreating(function (Student $student) {
            $student->teams()->attach(Team::inRandomOrder()->first()->id ?? Team::factory()->create()->id);
        });
    }

    /**
     * With a grade.
     */
    public function withGrade(): static
    {
        return $this->state(fn (array $attributes) => [
            'grade_id' => Grade::inRandomOrder()->first()->id,
        ]);
    }
}
