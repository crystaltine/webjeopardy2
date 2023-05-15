import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadJSONfromURL } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));

loadJSONfromURL('https://hogridr.github.io/webjeopardydocs/genericjeopardy.json', 'webjeopardy:genericjeopardy');
loadJSONfromURL('https://hogridr.github.io/webjeopardydocs/genericjeopardy2.json', 'webjeopardy:genericjeopardy2');
loadJSONfromURL('https://hogridr.github.io/webjeopardydocs/pf2template.json', 'webjeopardy:pf2template');
loadJSONfromURL('https://hogridr.github.io/webjeopardydocs/pf2-complete.json', 'webjeopardy:pf2-complete');
loadJSONfromURL('https://hogridr.github.io/webjeopardydocs/short.json', 'webjeopardy:short');
if (!navigator.userAgent.match("Mobile") && !navigator.userAgent.match("Tablet")) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <div>This app is currently incompatible with mobile browsers. Please switch to a desktop device. (mobile version coming soon (never))</div>
    </React.StrictMode>
  )
}