import React from 'react';
import ReactDOM from 'react-dom/client';
import { bindActionCreators, legacy_createStore } from 'redux';
import * as actions from './actions';
import './index.css';
import reducer from './reducer';
// import App from './App';

const store = legacy_createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }
// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>
);
