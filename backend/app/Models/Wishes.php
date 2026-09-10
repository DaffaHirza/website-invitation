<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishes extends Model
{
    protected $fillable = [
        'name',
        'message',
    ];
}
