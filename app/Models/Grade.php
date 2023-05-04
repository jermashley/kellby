<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Grade extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    public static $grades = [
        ['name' => 'First', 'number' => 1],
        ['name' => 'Second', 'number' => 2],
        ['name' => 'Third', 'number' => 3],
        ['name' => 'Fourth', 'number' => 4],
        ['name' => 'Fifth', 'number' => 5],
        ['name' => 'Sixth', 'number' => 6],
        ['name' => 'Seventh', 'number' => 7],
        ['name' => 'Eighth', 'number' => 8],
        ['name' => 'Ninth', 'number' => 9],
        ['name' => 'Tenth', 'number' => 10],
        ['name' => 'Eleventh', 'number' => 11],
        ['name' => 'Twelfth', 'number' => 12],
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'number',
        'description',
    ];

    protected $appends = [
        'description',
    ];

    /**
     * An attribute that is the description of the grade.
     */
    public function getDescriptionAttribute(): string
    {
        return $this->name.' Grade';
    }
}
