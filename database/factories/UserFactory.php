<?php

namespace Database\Factories;

use App\Enums\UserRoleEnum;
use App\Models\Grade;
use App\Models\Subject;
use App\Models\Team;
use App\Models\TimeLog;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
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
            'avatar' => fake()->imageUrl(512, 512, 'cats'),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return $this
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the model's type should be teacher.
     *
     * @return $this
     */
    public function teacher(): static
    {
        return $this->afterCreating(function (User $user) {
            $user->assignRole(UserRoleEnum::teacher->value);
        });
    }

    /**
     * Indicate that the model's type should be student.
     *
     * @return $this
     */
    public function student(): static
    {
        return $this->afterCreating(function (User $user) {
            $user->assignRole(UserRoleEnum::student->value);

            // Get a random team and attach the student to it.
            $team = Team::inRandomOrder()->first();
            if ($team) {
                $team->users()->attach($user->id);
            }
        });
    }

    /**
     * Indicate that the model owns a team.
     *
     * @return $this
     */
    public function withTeam(): static
    {
        return $this->afterCreating(function (User $user) {
            Team::factory()->create([
                'owner_id' => $user->id,
            ]);
        });
    }

    /**
     * Indicate that the model has time logs.
     *
     * @return $this
     */
    public function withTimeLogs(int $count = 1): static
    {
        return $this->afterCreating(function (User $user) use ($count) {
            for ($i = 0; $i < $count; $i++) {
                TimeLog::factory()->create([
                    'user_id' => $user->id,
                    'grade_id' => Grade::inRandomOrder()->first()->id,
                    'subject_id' => Subject::inRandomOrder()->first()->id,
                    'seconds' => $this->faker->numberBetween(1800, 5400),
                ]);
            }
        });
    }
}
