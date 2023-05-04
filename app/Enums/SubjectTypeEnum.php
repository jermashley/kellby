<?php

namespace App\Enums;

use App\Interfaces\StaticArrayable;

enum SubjectTypeEnum: string implements StaticArrayable
{
    case CORE = 'core';
    case ELECTIVE = 'elective';

    public static function toArray(): array
    {
        $data = [];

        foreach (SubjectTypeEnum::cases() as $type) {
            $data[] = [
                'name' => $type->name,
                'value' => $type->value,
            ];
        }

        return $data ?? [];
    }

    public static function toFlatArray(): array
    {
        $data = [];

        foreach (SubjectTypeEnum::cases() as $type) {
            $data[$type->name] = $type->value;
        }

        return $data ?? [];
    }
}
