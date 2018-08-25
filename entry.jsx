import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root';
import configureStore from './frontend/store/store';

document.addEventListener('DOMContentLoaded', () => {
  debugger
  let store;
  store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
