<?php

namespace App\Models;

use App\Models\Scopes\SubjectScope;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Subject extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    public static function booted(): void
    {
        static::addGlobalScope(new SubjectScope());

        static::creating(function ($subject) {
            $subject->teacher_id = Auth::id();
        });
    }

    protected $fillable = [
        'name',
        'type',
        'teacher_id',
    ];

    protected $hidden = [
        'id',
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}
