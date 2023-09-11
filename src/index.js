import React from 'react';
import { createRoot } from 'react-dom/client';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://pokemonserver-production.up.railway.app/';

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,    
);
