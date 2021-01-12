import React from 'react';
import ToDo from './ToDo';
import { TaskConsumer } from "./App";

const ToDoList = () => {
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <TaskConsumer>
                {({ tasks }) => (
                    <ul className="list-group m-3">
                        {
                            tasks.map((task) => <ToDo task={task} key={task.id} />)
                        }
                    </ul>
                )}
            </TaskConsumer>
        </>
    )
};

export default ToDoList;