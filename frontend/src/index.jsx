import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import './mobile-header.css';
import './interaction-refinements.css';
import './heat-strip.css';
import './loading-states.css';
import './navigation-heat.css';
import './components/completion.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
