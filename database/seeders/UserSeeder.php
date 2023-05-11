<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(10)->withTeam()->teacher()->create();
        User::factory(50)->student()->withTimeLogs(25)->create();
    }
}
