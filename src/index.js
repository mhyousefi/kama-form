import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  rootEl
)

registerServiceWorker();
