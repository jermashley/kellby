<?php

namespace App\Http\Controllers\Api;

use App\Enums\UserRoleEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', Auth::user());

        // Return unauthorized if user is not a teacher.
        if (! Auth::user()->hasRole(UserRoleEnum::teacher->value)) {
            return response()->json([], HttpCodes::HTTP_UNAUTHORIZED);
        }

        // Get all teams owned by the teacher.
        $teams = Auth::user()->ownedTeams;

        // Initialize an empty collection to store students.
        $students = collect();

        // Loop through each team and get all students.
        foreach ($teams as $team) {
            $teamStudents = $team->users->load(['grade', 'teams']);
            $students = $students->concat($teamStudents);
        }

        // If you want to filter only users with the role "student", you can do so like this:
        $students = $students->filter(function ($student) {
            return $student->hasRole('student');
        });

        // Remove duplicates (if a student belongs to multiple teams).
        $students = $students->unique('id')->values();

        return response()->json($students, HttpCodes::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user): JsonResponse
    {
        $this->authorize('view', $user);

        if ($user->uuid === Auth::user()->uuid) {
            return response()->json([], HttpCodes::HTTP_NOT_FOUND);
        }

        $user = $user->load(['grade', 'teams']);

        return response()->json($user, HttpCodes::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): Response
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        //
    }
}
