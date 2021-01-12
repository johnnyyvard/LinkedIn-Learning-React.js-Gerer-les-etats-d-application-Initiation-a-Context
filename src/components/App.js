import React from 'react';
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddTask from './AddTask';

const initialData = {
    tasks: [
        { id: 'jsertu7a', name: 'Ranger la vaisselle', completed: false },
        { id: 'jseruo7l', name: 'Répondre appel d\'offres', completed: false },
        { id: 'jseruy2q', name: 'Signer contrat', completed: false },
        { id: 'jserv4sw', name: 'Aspirer le salon', completed: false }
    ]
};

const TaskData = React.createContext();
export const TaskConsumer = TaskData.Consumer;

class App extends React.Component {
    render() {
        return (
            <TaskData.Provider value={initialData} >
                <section id="todo">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/add-task" component={AddTask} />
                            <Route path="/:filter?" component={ToDoList} />
                        </Switch>
                        <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                    </BrowserRouter>
                </section>
            </TaskData.Provider>
        )
    }
};

export default App;