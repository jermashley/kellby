<?php

namespace Database\Factories;

use App\Enums\SubjectTypeEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subjectTypeLabels = [];

        foreach (SubjectTypeEnum::toArray() as $type) {
            $subjectTypeLabels[] = $type['label'];
        }

        return [
            'name' => $this->faker->unique()->randomElement(['Reading', 'Math', 'Social Studies', 'Language Arts', 'Science']),
            'type' => SubjectTypeEnum::CORE,
        ];
    }
}
