<?php

namespace Database\Seeders;

use App\Enums\GradeEnum;
use App\Models\Grade;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (GradeEnum::optionsForSelect() as $grade) {
            Grade::create([
                'name' => $grade['label'],
                'number' => $grade['number'],
            ]);
        }
    }
}
