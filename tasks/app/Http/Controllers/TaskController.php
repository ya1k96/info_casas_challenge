<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->input('name');
        $completed = $request->input('completed');

        $tasks = Task::all();
        if(!empty($name) && $name !== 'null') {
            $tasks = Task::where('name', 'like', '%'.$name.'%');

            if(!empty($completed) && $name !== 'null') $tasks->where('completed', 1);

            $tasks = $tasks->get();
        }

        return response($tasks, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        if(empty($name))
            return response(
                'Name field required',
                400
            );

        $new_stask = new Task();
        $new_stask->name = $name;
        $new_stask->save();

        return response($new_stask, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(empty($id)) {
            return response(
                'id must be provided',
                200
            );
        }

        $task = Task::find($id);

        return response($task, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(empty($id)) {
            return response(
                'id must be provided',
                200
            );
        }

        $task = Task::find($id);

        if(empty($task)){
            return response(
                'Id record not found',
                400
            );
        }

        $name = $request->input('name');
        $completed = $request->input('completed');

        $task->name = isset($name) ? $name : $task->name;
        $task->completed = isset($completed ) ? $completed : $task->completed;
        $task->update();

        return response($task, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(empty($id)) {
            return response(
                'id must be provided',
                200
            );
        }
        $task = Task::find($id);

        if(isset($task) && $task->delete()){
            return response(
                'Deleted item task',
                200
            );
        }

        return response(
            'An unexpected error has been occurred',
            400
        );
    }
}
