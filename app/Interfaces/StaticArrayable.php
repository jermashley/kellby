<?php

namespace App\Interfaces;

interface StaticArrayable
{
    public static function toArray(): array;

    public static function toFlatArray(): array;
}
