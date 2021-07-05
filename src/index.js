import React from 'react'; // importa la libreria react
import ReactDOM from 'react-dom'; // importa el modulo reactDOM
import './index.css'; // importa el css del componente y con ./ indicamos la ubicacion, en este caso es en la misma carpeta

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
