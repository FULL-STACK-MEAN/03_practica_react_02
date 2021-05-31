// Ejemplo de componente raiz de clase

import React, { Component } from 'react';
import Aside from './components/Aside';
import Tasks from './components/Tasks';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    title = 'Listado de tareas';

    componentDidMount() {
        if(localStorage.getItem('tasks')) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }

    componentDidUpdate() {
        this.setLocalStorage();
    }

    addTask = task => {
        const id = this.state.tasks.length > 0 ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 1;
        task.id = id;
        task.done = false;
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    deleteTask = id => {
        const newTasks = this.state.tasks.filter(elem => elem.id !== id);
        this.setState({tasks: newTasks})
    }

    toggleDoneTask = id => {
        const newTasks = this.state.tasks.map(elem => {
            if(elem.id === id) {
                elem.done = !elem.done;
            }
            return elem
        })
        this.setState({tasks: newTasks})
    }

    setLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    render() {
        return (
        <div className="container show">
            <div className="row grid">
            <Tasks tasks={this.state.tasks} 
                   title={this.title} 
                   deleteTask={this.deleteTask}
                   toggleDoneTask={this.toggleDoneTask}/>
            </div>
            <Aside addTask={this.addTask} />
        </div>
        )
    }
}

export default App;

