import React from 'react';
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddTask from './AddTask';
// import initialData from '../initialData';
// import uniqueid from 'uniqueid'
// import Fetching from './Fetching'

const initialData = {
    tasks =[
        { id: 'jsertu7a', name: 'Ranger la vaisselle', completed: false },
        { id: 'jseruo7l', name: 'Répondre appel d\'offres', completed: false },
        { id: 'jseruy2q', name: 'Signer contrat', completed: false },
        { id: 'jserv4sw', name: 'Aspirer le salon', completed: false }
    ]
};

const TaskData = React.createContext();

class App extends React.Component {

    // state = {
    //     tasks: [],
    //     fetching: true
    // }

    // componentDidMount = () => {
    //     let delay = Math.floor(Math.random() * 5000)

    //     setTimeout(() => {
    //         this.setState({
    //             fetching: false,
    //             tasks: initialData
    //         })
    //     } , delay)
    // }

    // onToggleCompleted = (taskId) => {
    //     let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    //     taskToUpdate.completed = !taskToUpdate.completed

    //     this.setState(prevState => (
    //         prevState.tasks.map(task => {
    //             return task.id === taskId ? taskToUpdate : task
    //         })
    //     ))
    // }

    // onAddTask = (newTaskName) => {
    //     let newTask = {
    //         id: uniqueid(),
    //         name: newTaskName,
    //         completed: false
    //     }

    //     this.setState(prevState => ({
    //         tasks: [...prevState.tasks, newTask]
    //     }))
    // }

    // onDeleteCompleted = () => {
    //     this.setState(prevState => {
    //         let newState = prevState.tasks.filter(task => !task.completed)
    //         return {
    //             tasks: newState
    //         }
    //     })
    // }

    // // shouldComponentUpdate = () => {
    // //     console.log('Bonjour de shouldComponentUpdate')
    // //     return true
    // // }

    // // componentDidMount = () => {
    // //     console.log('Bonjour de componentDidMount')
    // // }

    // // componentDidUpdate = () => {
    // //     console.log('Bonjour de componentDidUpdate')
    // // }

    // // getSnapshotBeforeUpdate = () => {
    // //     console.log('Bonjour de getSnapshotBeforeUpdate')
    // // }



    render() {
        // console.log('Bonjour de render')

        return (
            <TaskData.Provider value={initialData} >
                <section id="todo">
                    {/* {this.state.fetching? <Fetching /> : null} */}
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
}

export default App