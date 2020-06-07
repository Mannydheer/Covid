import React from './node_modules/src/node_modules/react';
import ReactDOM from './node_modules/src/node_modules/react-dom';
import './node_modules/src/index.css';
import App from './App';
import * as serviceWorker from './node_modules/src/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
