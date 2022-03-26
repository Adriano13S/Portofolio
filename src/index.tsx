import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/1.Main';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.querySelector('#main')
);