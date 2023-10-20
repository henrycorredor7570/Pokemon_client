import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = 'https://servidor-pokemon-40x6.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
