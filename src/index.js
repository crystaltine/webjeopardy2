import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadJSONfromURL } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));

loadJSONfromURL('https://hogridr.github.io/tests/genericjeopardy.json', 'webjeopardy:default');
loadJSONfromURL('https://hogridr.github.io/tests/genericjeopardy2.json', 'webjeopardy:default2');
loadJSONfromURL('https://hogridr.github.io/tests/pf2template.json', 'webjeopardy:pf2template');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);