import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import './mobile-header.css';
import './interactions.css';
import './heat-strip.css';
import './loading-states.css';
import './navigation.css';
import './components/theme.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
