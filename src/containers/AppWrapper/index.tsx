import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';

const store = configureStore();

const AppWrapper: React.FC = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

export default AppWrapper;
