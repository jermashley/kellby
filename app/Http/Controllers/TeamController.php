<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Models\Team;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamRequest $request): RedirectResponse
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, Team $team): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team): RedirectResponse
    {
        //
    }
}
