import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/calculator.js';
// import './index.css';
import { Store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
