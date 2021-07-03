import React from 'react'; // importa la libreria react
import ReactDOM from 'react-dom'; // importa el modulo reactDOM
import './index.css'; // importa el css del componente y con ./ indicamos la ubicacion, en este caso es en la misma carpeta
//import App from './App'; // importamos la clase  App dentro del archivo App y no necesita especificar que sea js.
import Card from './Card'; // importando nuestro componente card.
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> 
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> 
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  <React.StrictMode>
      <Card />  --> Nuestro componente card
    </React.StrictMode>
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
