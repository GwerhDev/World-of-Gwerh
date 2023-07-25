import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app/routes/App';
import reportWebVitals from './tests/reportWebVitals';
import store from './middleware/redux/store'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

reportWebVitals();
