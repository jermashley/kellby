<?php

namespace App\Models;

use App\Models\Scopes\StudentScope;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends User
{
    use HasFactory, HasUuid, SoftDeletes;

    protected $table = 'users';

    protected $fillable = [
        'type',
    ];

    protected $hidden = [
        'id',
    ];

    public static function booted(): void
    {
        static::addGlobalScope(new StudentScope);

        static::creating(function ($student) {
            $student->type = 'student';
        });
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    /**
     * Get the teacher for the Student belongs to.
     */
    public function teacher(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'teacher_student', 'student_id', 'teacher_id');
    }

    /**
     * Get the grade for the Student
     */
    public function grade(): HasOneThrough
    {
        return $this->hasOneThrough(Grade::class, GradeStudent::class, 'student_id', 'id', 'id', 'grade_id');
    }

    public function timeLogs(): HasMany
    {
        return $this->hasMany(TimeLog::class);
    }
}
