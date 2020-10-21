import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';

const history = createBrowserHistory();

const store = configureStore({
  history
});

const AppWrapper: React.FC = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

export default AppWrapper;