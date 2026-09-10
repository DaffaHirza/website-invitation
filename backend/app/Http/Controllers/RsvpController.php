<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rsvp;

class RsvpController extends Controller
{
    public function index(){
        return Rsvp::all();
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'status' => 'required',
            'jumlah_tamu' => 'required',
        ]);

        Rsvp::create($validated);

        return response()->json([
            'message' => 'RSVP berhasil disimpan',
        ]);
    }
}
