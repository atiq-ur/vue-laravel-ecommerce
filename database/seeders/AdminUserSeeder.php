<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('email', 'admin@admin.com')->first();

        if (!$user) {
            $user = User::create([
               'name' => 'Admin',
               'email' => 'admin@admin.com',
               'password' => bcrypt('admin1234'),
               'email_verified_at' => now(),
               'is_admin' => true
            ]);

            $customer = new Customer();
            $names = explode(' ', $user->name);
            $customer->user_id = $user->id;
            $customer->first_name = $names[0];
            $customer->last_name = $names[1] ?? '';
            $customer->save();
        }
    }
}
