import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor(){
        super();
        this.state = { // Creando nuestro estado
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // actualiza la propiedad con la entradas del input 
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc' >
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;

/*
<CardList robots={robots}/> ya no accedemos desde el objeto robots, sino que accedemos desde el estado para poder cambiarlo.

const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
EN esta funcion filteredRobots accedemos al array robots usando el método filter para que nos retorne solo los robots que coincidan con la búsqueda almacenada en searchfield, para ello dentro del metodo filter utilizamos otro método includes para que si el valor de searchfield coincide con el nombre del robot o robots, retorne true y asi el metodo filter vaya creando el array con los robots
*/