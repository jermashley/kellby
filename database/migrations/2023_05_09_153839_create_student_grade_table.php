<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_grade', function (Blueprint $table) {
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('grade_id');

            $table->foreign('student_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('grade_id')
                ->references('id')
                ->on('grades')
                ->onDelete('cascade');

            $table->primary(['student_id', 'grade_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_grade');
    }
};
