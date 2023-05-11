<?php

namespace Database\Seeders;

use App\Enums\SubjectEnum;
use App\Enums\SubjectTypeEnum;
use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (SubjectEnum::optionsForSelect() as $grade) {
            Subject::create([
                'name' => $grade['label'],
                'type' => SubjectTypeEnum::core,
            ]);
        }
    }
}
