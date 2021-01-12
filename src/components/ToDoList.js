import React from 'react';
import ToDo from './ToDo';
import { TaskConsumer } from "./App";

const ToDoList = () => {
    // let filteredTasks

    // switch (match.params.filter) {
    //     case 'completed':
    //         filteredTasks = tasks.filter(task => task.completed)
    //         break;

    //     default:
    //         filteredTasks = tasks
    //         break;
    // }

    // if (filteredTasks.length === 0) {
    //     return (
    //         <>
    //             <h1 className="m-3">Liste de tâches</h1>
    //             <ul className="list-group m-3">
    //                 <li className="list-group-item">Aucune tâche à afficher.</li>
    //             </ul>
    //         </>

    //     )

    // } else {
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

    // }
}

export default ToDoList;