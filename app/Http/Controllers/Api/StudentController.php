<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $teacher = Teacher::findOrFail(Auth::id());
        $students = $teacher->students()->with('grade')->get();

        return response()->json($students, HttpCodes::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request): JsonResponse
    {
        $student = Student::create($request->validated());
        $teacher = Teacher::findOrFail(Auth::id());
        $student->teacher()->attach($teacher->id);

        return response()->json($student, HttpCodes::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student): JsonResponse
    {
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
