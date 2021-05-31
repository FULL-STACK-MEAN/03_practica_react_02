// Ejemplo de componente raiz de clase

import React, { Component } from 'react';
import Aside from './components/Aside';
import Tasks from './components/Tasks';

class App extends Component {

  tasks = [
    {
      id: 1,
      title: 'Contactar Repsol',
      members: 'Juan López',
      description: 'Contactar con el departamento de energía',
      date: '2021-06-05'
    },
    {
      id: 2,
      title: 'Preparar dossier Jazztel',
      members: 'Laura Gómez',
      description: 'Preparar dossier de blablabla...',
      date: '2021-06-10'
    },
    {
      id: 3,
      title: 'Cierre cuenta Telefónica',
      members: 'Lucía Pérez',
      description: 'Cierre trimestral blablabla...',
      date: '2021-06-30'
    }
  ]

  title = 'Listado de tareas'

  render() {
    return (
      <div className="container show">
        <div className="row grid">
          <Tasks tasks={this.tasks} title={this.title} />
        </div>
        <Aside />
      </div>
    )
  }
}

export default App;

