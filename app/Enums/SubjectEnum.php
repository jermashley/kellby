<?php

namespace App\Enums;

use App\Interfaces\StaticArrayable;

enum SubjectEnum: string implements StaticArrayable
{
    case READING = 'Reading';
    case MATH = 'Math';
    case SOCIAL_STUDIES = 'Social Studies';
    case LANGUAGE_ARTS = 'Language Arts';
    case SCIENCE = 'Science';

    public static function toArray(): array
    {
        $data = [];

        foreach (SubjectEnum::cases() as $type) {
            $data[] = [
                'name' => $type->name,
                'label' => $type->value,
            ];
        }

        return $data ?? [];
    }

    public static function toFlatArray(): array
    {
        $data = [];

        foreach (SubjectEnum::cases() as $type) {
            $data[$type->name] = $type->value;
        }

        return $data ?? [];
    }
}
