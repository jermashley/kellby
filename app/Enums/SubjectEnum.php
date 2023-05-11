<?php

namespace App\Enums;

use App\Interfaces\StaticArrayable;
use Illuminate\Support\Collection;

enum SubjectEnum: string implements StaticArrayable
{
    case reading = 'reading';
    case math = 'math';
    case social_studies = 'social studies';
    case language_arts = 'language arts';
    case science = 'science';

    public function label(): string
    {
        return match ($this) {
            self::reading => 'Reading',
            self::math => 'Math',
            self::social_studies => 'Social Studies',
            self::language_arts => 'Language Arts',
            self::science => 'Science',
        };
    }

    public static function options(): Collection
    {
        return collect(self::cases())->mapWithKeys(function (SubjectEnum $subject) {
            return [
                $subject->value => $subject->label(),
            ];
        });
    }

    public static function optionsForSelect(): Collection
    {
        return collect(self::cases())->map(function (SubjectEnum $subject) {
            return
                [
                    'label' => $subject->label(),
                    'value' => $subject->value,
                ];
        });
    }

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
