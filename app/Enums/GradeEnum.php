<?php

namespace App\Enums;

use Illuminate\Support\Collection;

enum GradeEnum: string
{
    case first = 'first';
    case second = 'second';
    case third = 'third';
    case fourth = 'fourth';
    case fifth = 'fifth';
    case sixth = 'sixth';
    case seventh = 'seventh';
    case eighth = 'eighth';
    case ninth = 'ninth';
    case tenth = 'tenth';
    case eleventh = 'eleventh';
    case twelfth = 'twelfth';

    public function label(): string
    {
        return match ($this) {
            self::first => 'First',
            self::second => 'Second',
            self::third => 'Third',
            self::fourth => 'Fourth',
            self::fifth => 'Fifth',
            self::sixth => 'Sixth',
            self::seventh => 'Seventh',
            self::eighth => 'Eighth',
            self::ninth => 'Ninth',
            self::tenth => 'Tenth',
            self::eleventh => 'Eleventh',
            self::twelfth => 'Twelfth',
        };
    }

    public function number(): int
    {
        return match ($this) {
            self::first => 1,
            self::second => 2,
            self::third => 3,
            self::fourth => 4,
            self::fifth => 5,
            self::sixth => 6,
            self::seventh => 7,
            self::eighth => 8,
            self::ninth => 9,
            self::tenth => 10,
            self::eleventh => 11,
            self::twelfth => 12,
        };
    }

    public static function options(): Collection
    {
        return collect(self::cases())->mapWithKeys(function (GradeEnum $grade) {
            return [
                $grade->value => $grade->label(),
            ];
        });
    }

    public static function optionsForSelect(): Collection
    {
        return collect(self::cases())->map(function (GradeEnum $grade) {
            return
                [
                    'label' => $grade->label(),
                    'value' => $grade->value,
                    'number' => $grade->number(),
                ];
        });
    }
}
