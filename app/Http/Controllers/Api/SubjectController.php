<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubjectRequest;
use App\Models\Subject;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponses;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return response()->json(Subject::all(), HttpResponses::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubjectRequest $request): JsonResponse
    {
        $subject = Subject::create($request->validated());

        return response()->json($subject, HttpResponses::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        return response()->json(Subject::findOrFail($id), HttpResponses::HTTP_OK);
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
    public function destroy(Subject $subject): JsonResponse
    {
        if (empty($subject->teacher_id)) {
            return response()->json([
                'message' => 'Cannot delete system subject.',
            ], HttpResponses::HTTP_BAD_REQUEST);
        }

        $subject->delete();

        return response()->json(null, HttpResponses::HTTP_NO_CONTENT);
    }
}
