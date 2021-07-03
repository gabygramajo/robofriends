import React from 'react'; // importa la libreria react
import ReactDOM from 'react-dom'; // importa el modulo reactDOM
import './index.css'; // importa el css del componente y con ./ indicamos la ubicacion, en este caso es en la misma carpeta
//import App from './App'; // importamos la clase  App dentro del archivo App y no necesita especificar que sea js.
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  <React.StrictMode>
      <CardList />  --> contiene el array con los componentes Card
    </React.StrictMode>
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
