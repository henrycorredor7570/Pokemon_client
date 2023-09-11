import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://pokemonserver-production.up.railway.app/';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement(
  <Provider store={store}>{/* me sirve para que este conectado con la aplicacion de react (conecta react con el store*/}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,    
  document.getElementById('root')
);