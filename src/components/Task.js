import React, { Component } from 'react';

class Task extends Component {
    render() {

        const {task} = this.props;

        return (
            <div className="card">
                <div className="header-card">
                    <h1>{task.title}</h1>
                </div>
                <div className="body-card">
                    <p>{task.members}</p>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                </div>
                <div className="footer-card">
                    <button>Pendiente</button>
                </div>
            </div>
        )
    }
}

export default Task;
