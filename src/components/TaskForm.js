import React, { Component } from 'react'

class TaskForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            members: '',
            description: '',
            date: (new Date()).toISOString().substring(0, 10)
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    addTask = () => {
        this.props.addTask(this.state);
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-100">
                        <label>Nombre tareas</label>
                        <input type="text"
                               name="title"
                               onChange={this.onChange}
                               value={this.state.title} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Participantes</label>
                        <input type="text" 
                               name="members"
                               onChange={this.onChange}
                               value={this.state.members}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Descripción</label>
                        <textarea name="description"
                                  onChange={this.onChange}
                                  value={this.state.description}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Fecha límite</label>
                        <input type="date" 
                               name="date"
                               onChange={this.onChange}
                               value={this.state.date}/>
                    </div>
                </div>
                <div className="row flex j-center a-center">
                    <button type="button" onClick={this.addTask}>Añadir</button>
                </div>
            </form>
        )
    }
}

export default TaskForm
