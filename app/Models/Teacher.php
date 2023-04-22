<?php

namespace App\Models;

use App\Models\Scopes\TeacherScope;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Teacher extends User
{
    use HasFactory, HasUuid;

    protected $table = 'users';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'type',
        'avatar',
    ];

    public static function booted(): void
    {
        static::addGlobalScope(new TeacherScope);

        static::creating(function ($teacher) {
            $teacher->type = 'teacher';
        });
    }

    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'team_owner', 'user_id', 'team_id');
    }
}
