import React, { useState } from 'react';
import { Task } from "../../models/task.class"
import { LEVELS } from "../../models/levels-enum"
import TaskComponent from '../pure/forms/task';


const TaskListComponent = (props) => {

    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);


    return (
        <div>
            <div>
                Your task:
            </div>
            <TaskComponent task= {defaultTask}></TaskComponent>
        </div>
    );
};





export default TaskListComponent;