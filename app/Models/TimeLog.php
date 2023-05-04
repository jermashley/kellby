<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
}
