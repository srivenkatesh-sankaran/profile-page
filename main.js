import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

ReactDOM.render(
  React.createElement(Provider, { store }, React.createElement(App, null)),
  document.getElementById('app'),
);
