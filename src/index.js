import './styles/globals.css';
import './styles/root.css';
import React from 'react';
import Router from './app/routes/Router';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';
import store from './middleware/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
