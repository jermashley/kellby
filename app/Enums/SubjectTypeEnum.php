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
                'label' => $type->value,
            ];
        }

        return $data ?? [];
    }
}
