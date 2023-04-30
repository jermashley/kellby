<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use App\Models\Team;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request): JsonResponse
    {
        $student = Student::create($request->validated());
        $team = Team::find($request->team_id);
        $team->students()->attach($student);

        return response()->json($student, HttpCodes::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $student = Student::find($id);

        return response()->json($student, HttpCodes::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, string $id): JsonResponse
    {
        $student = Student::find($id);
        $student->update($request->validated());

        return response()->json($student, HttpCodes::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        $student = Student::find($id);
        $student->softDelete();

        return response()->json([], HttpCodes::HTTP_NO_CONTENT);
    }
}
