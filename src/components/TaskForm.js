import React, { Component } from 'react'

class TaskForm extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-100">
                        <label>Nombre tareas</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Participantes</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Descripción</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Fecha límite</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="row flex j-center a-center">
                    <button type="submit">Añadir</button>
                </div>
            </form>
        )
    }
}

export default TaskForm
