import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <h1>Calculadora</h1>
    <Calculator />

    <h4>By Gerde Farias</h4>

  </React.StrictMode>
);

reportWebVitals();
