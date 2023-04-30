<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AttachTeamMemberRequest;
use App\Http\Requests\DetachTeamMemberRequest;
use App\Models\Student;
use App\Models\Team;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class TeamMemberController extends Controller
{
    public function attach(AttachTeamMemberRequest $request): JsonResponse
    {
        $team = Team::find($request->team_id);
        $team->students()->attach($request->student_id);

        return response()->json([], HttpCodes::HTTP_OK);
    }

    public function detach(DetachTeamMemberRequest $request): JsonResponse
    {
        $team = Team::find($request->team_id);
        $student = Student::find($request->student_id);

        // We don't want to lose the student, so, we'll only allow detaching if it
        // has an email address. This is a bit of a hack, but it'll do for now.
        if (! $student->email) {
            return response()->json([], HttpCodes::HTTP_PRECONDITION_FAILED);
        }

        $team->students()->detach($request->student_id);

        return response()->json([], HttpCodes::HTTP_OK);
    }
}
