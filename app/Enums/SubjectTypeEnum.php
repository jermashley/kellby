<?php

namespace App\Enums;

use App\Interfaces\StaticArrayable;
use Illuminate\Support\Collection;

enum SubjectTypeEnum: string implements StaticArrayable
{
    case core = 'core';
    case elective = 'elective';

    public function label(): string
    {
        return match ($this) {
            self::core => 'Core',
            self::elective => 'Elective',
        };
    }

    public static function options(): Collection
    {
        return collect(self::cases())->mapWithKeys(function (SubjectTypeEnum $type) {
            return [
                $type->value => $type->label(),
            ];
        });
    }

    public static function optionsForSelect(): Collection
    {
        return collect(self::cases())->map(function (SubjectTypeEnum $type) {
            return
                [
                    'label' => $type->label(),
                    'value' => $type->value,
                ];
        });
    }

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
