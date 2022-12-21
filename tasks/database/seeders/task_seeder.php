<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class task_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'id' => 1,
            'name' => 'Pasar Fase de Grupos',
            'completed' => true,
        ]);
        DB::table('tasks')->insert([
            'id' => 2,
            'name' => 'Pasar Octavos de Final',
            'completed' => true,
        ]);
        DB::table('tasks')->insert([
            'id' => 3,
            'name' => 'Pasar Pasar Cuartos',
            'completed' => true,
        ]);
        DB::table('tasks')->insert([
            'id' => 4,
            'name' => 'Pasar Ganar Semifinales',
            'completed' => false,
        ]);
        DB::table('tasks')->insert([
            'id' => 5,
            'name' => 'SALIR CAMPEON DEL MUNDO 👑',
            'completed' => false,
        ]);
    }
}
