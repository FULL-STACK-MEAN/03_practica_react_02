import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
    
    render() {
        return (
            <>
                { this.props.tasks.map((elem, i) => <Task key={i} 
                                                          task={elem} 
                                                          deleteTask={this.props.deleteTask}
                                                          toggleDoneTask={this.props.toggleDoneTask} />)}
            </>
        )
    }
}

export default Tasks;
