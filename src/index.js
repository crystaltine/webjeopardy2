import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

fetch('../generic.json')
  .then(response => response.json())
  .then(data => {
      localStorage.setItem('generic.json', JSON.stringify(data));
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);