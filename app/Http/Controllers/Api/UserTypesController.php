<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class UserTypesController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json(User::$types, HttpCodes::HTTP_OK);
    }
}
