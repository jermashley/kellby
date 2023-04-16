<?php

namespace Database\Factories;

use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
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
            'type' => 'teacher',
            'avatar' => fake()->imageUrl(512, 512, 'cats'),
        ];
    }

    /**
     * Attach the user to a team.
     */
    public function withTeam(): static
    {
        return $this->afterCreating(function (Teacher $teacher) {
            $teacher->teams()->attach($this->faker->unique()->numberBetween(1, 10));
        });
    }
}
