<?php

namespace App\Http\Controllers\Api;

use App\Enums\UserRoleEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class UserTypesController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json(UserRoleEnum::optionsForSelect(), HttpCodes::HTTP_OK);
    }
}
