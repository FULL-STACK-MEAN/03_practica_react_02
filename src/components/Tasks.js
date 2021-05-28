import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
    
    render() {
        return (
            <>
                { this.props.tasks.map((elem, i) => <Task key={i} task={elem} />)}
            </>
        )
    }
}

export default Tasks;
