import React, { Component, createRef } from 'react';
import TaskForm from './TaskForm';

class Aside extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dummy: 'test',
            isOpen: false
        }
    }

    asideRef = createRef();

    handleToggleMenu = () => {
        // this.setState({isOpen: !this.state.isOpen})  // setState recibe un objeto con las propiedades de state que cambien
        this.asideRef.current.classList.toggle('open');
    }

    render() {
        return (
        //    <aside className={this.state.isOpen ? 'open' : ''}> Mediante una propiedad de state
           <aside ref={this.asideRef}>
               <div id="burger" onClick={this.handleToggleMenu}>
                   <div className="bar top"></div>
                   <div className="bar center"></div>
                   <div className="bar bottom"></div>
               </div>
               <TaskForm />
           </aside>
        )
    }
}

export default Aside;
