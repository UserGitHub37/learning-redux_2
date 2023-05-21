import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import reducer from './reducer';

const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
