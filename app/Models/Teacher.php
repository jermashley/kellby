<?php

namespace App\Models;

use App\Models\Scopes\TeacherScope;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teacher extends User
{
    use HasFactory, HasUuid, SoftDeletes;

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

    /**
     * Get the students for the Teacher has many.
     */
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'teacher_student', 'teacher_id', 'student_id');
    }
}
