import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import store from './app/store';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
