<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Element;
use App\Http\Requests;
use DB;

class CWElementController extends Controller
{   
    public function create(Request $request)
    {
       $this->validate($request, [
         'title'  => 'required',
         'note' => 'required',
         'photo' => 'required',
       ]);
        
       $post = new Element;
       $post->title = $request->input('title');
       $post->note = $request->input('note');
       $post->photo = $request->input('photo');
       
       $post->save();

       return response()->success(compact('element'));
    }

    public function get()
    {
        $elements = Element::get();

        return response()
        ->success(compact('elements'));
    }
    public function delete(Request $request)
    {
        $id = $request->input('id');
        return Element::destroy($id);
    }
}
