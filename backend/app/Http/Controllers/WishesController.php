<?php

namespace App\Http\Controllers;

use App\Models\Wishes;
use Illuminate\Http\Request;

class WishesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Wishes::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'message' => 'required',
        ]);

        Wishes::create($validated);

        return response()->json([
            'message' => 'Ucapan berhasil disimpan',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Wishes $wishes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wishes $wishes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Wishes $wishes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wishes $wishes)
    {
        //
    }
}
