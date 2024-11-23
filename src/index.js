// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';  // Import your AWS configuration

// Configure Amplify with your AWS details
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
