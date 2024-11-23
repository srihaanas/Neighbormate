// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Make sure to import the CSS

// App logo path
import logo from '../public/logo.png';  // Make sure the logo file exists in the public folder

ReactDOM.render(
  <React.StrictMode>
    <div className="logo-container">
      <img src={logo} alt="App Logo" />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
