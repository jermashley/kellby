<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Permission\Traits\HasRoles;

class Team extends Model
{
    use HasFactory, HasUuid, HasRoles;

    protected $guard_name = 'web';

    protected $fillable = [
        'name',
        'user_id',
    ];

    /**
     * Get the users that owns the Team
     */
    public function owners(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'team_owner');
    }

    /**
     * Get the members of the Team
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'team_member');
    }
}
