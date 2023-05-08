<?php

namespace App\Http\Controllers\Api;

use App\Enums\SubjectTypeEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as HttpCodes;

class SubjectTypesController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json(SubjectTypeEnum::optionsForSelect(), HttpCodes::HTTP_OK);
    }
}
