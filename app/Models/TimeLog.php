<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TimeLog extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'seconds',
    ];

    /**
     * The attributes that should be automatically included in the model.
     */
    protected $appends = [
        'milliseconds',
    ];

    /**
     * Convert seconds to milliseconds.
     */
    public function getMillisecondsAttribute(): int
    {
        return $this->seconds * 1000;
    }

    /**
     * Get the student that owns the TimeLog.
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    /**
     * Get the subject that owns the TimeLog.
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    /**
     * Get the grade that owns the TimeLog.
     */
    public function grade(): BelongsTo
    {
        return $this->belongsTo(Grade::class);
    }
}
