// Ejemplo de componente raiz de clase

import React, { Component } from 'react';

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

  render() {
    return (
      <>
        { this.tasks.map((elem, i) => {
          return <p key={i}>{elem.title} - {elem.members} - {elem.date}</p>
        })}
      </>
    )
  }
}

export default App;

