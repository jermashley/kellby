<?php

namespace App\Models;

use App\Models\Scopes\StudentScope;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Student extends User
{
    use HasFactory, HasUuid;

    protected $table = 'users';

    protected $fillable = [
        'type',
    ];

    public static function booted(): void
    {
        static::addGlobalScope(new StudentScope);

        static::creating(function ($student) {
            $student->type = 'student';
        });
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
    public function grade(): BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }
}
