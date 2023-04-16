<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Student extends User
{
    use HasFactory, HasUuid;

    protected $table = 'users';

    /**
     * Get the teams that the User belongs to
     */
    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'team_member', 'user_id', 'team_id');
    }

    /**
     * Get the grade for the User
     */
    public function grade(): BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }
}
