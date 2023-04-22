<?php

namespace App\Policies;

use App\Models\Team;
use App\Models\User;

class TeamPolicy
{
    /**
     * Determine whether the User can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the User can view the model.
     */
    public function view(User $user, Team $team): bool
    {
        //
    }

    /**
     * Determine whether the User can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the User can update the model.
     */
    public function update(User $user, Team $team): bool
    {
        //
    }

    /**
     * Determine whether the User can delete the model.
     */
    public function delete(User $user, Team $team): bool
    {
        //
    }

    /**
     * Determine whether the User can restore the model.
     */
    public function restore(User $user, Team $team): bool
    {
        //
    }

    /**
     * Determine whether the User can permanently delete the model.
     */
    public function forceDelete(User $user, Team $team): bool
    {
        //
    }
}
