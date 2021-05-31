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

    addTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
        <div className="container show">
            <div className="row grid">
            <Tasks tasks={this.state.tasks} title={this.title} />
            </div>
            <Aside addTask={this.addTask} />
        </div>
        )
    }
}

export default App;

