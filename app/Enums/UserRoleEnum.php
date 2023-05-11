<?php

namespace App\Enums;

use Illuminate\Support\Collection;

enum UserRoleEnum: string
{
    case teacher = 'teacher';
    case student = 'student';

    public function label(): string
    {
        return match ($this) {
            self::teacher => 'Teacher',
            self::student => 'Student',
        };
    }

    public static function options(): Collection
    {
        return collect(self::cases())->mapWithKeys(function (UserRoleEnum $role) {
            return [
                $role->value => $role->label(),
            ];
        });
    }

    public static function optionsForSelect(): Collection
    {
        return collect(self::cases())->map(function (UserRoleEnum $role) {
            return
                [
                    'label' => $role->label(),
                    'value' => $role->value,
                ];
        });
    }
}
