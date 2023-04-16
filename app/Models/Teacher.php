<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Teacher extends User
{
    use HasFactory, HasUuid;

    protected $table = 'users';

    /**
     * Get the team that the teacher owns.
     */
    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'team_owner', 'user_id', 'team_id');
    }
}
