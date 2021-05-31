import React, { Component } from 'react';
import trashIcon from '../img/icons/trash.svg';
import usersIcon from '../img/icons/users.svg';
import calendarIcon from '../img/icons/calendar.svg';

class Task extends Component {
    render() {

        const {task} = this.props;

        return (
            <div className="card">
                <div className="header-card">
                    <h1>{task.title}</h1>
                    <img src={trashIcon} alt="" />
                </div>
                <div className="body-card">
                    <div>
                        <p className="users">
                            <img className="m-r-small" src={usersIcon} alt="" />
                            {task.members}
                        </p>
                        <p className="description">{task.description}</p>
                    </div>
                    <p className="date">
                        <img className="m-r-small" src={calendarIcon} alt="" />
                        {task.date}
                    </p>
                </div>
                <div className="footer-card">
                    <button>Pendiente</button>
                </div>
            </div>
        )
    }
}

export default Task;
