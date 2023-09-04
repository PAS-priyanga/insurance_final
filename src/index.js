import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./superhero.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './pages/App/App';
import { PolicyContextProvider } from './context/PolicyContext';
import { OrderContextProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PolicyContextProvider>
  <OrderContextProvider>
  <Router><App /></Router>
  </OrderContextProvider>
  </PolicyContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
