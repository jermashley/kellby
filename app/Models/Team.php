<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Team extends Model
{
    use HasFactory, HasUuid, HasRoles;

    protected $guard_name = 'web';

    protected $fillable = [
        'name',
        'user_id',
    ];
}
