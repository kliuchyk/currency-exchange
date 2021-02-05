import React from 'react';
import AppWrapper from './containers/AppWrapper';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import AppHeader from './components/AppHeader';
import CurrencyConverter from './pages/CurrencyConverter';
import CurrenciesList from './pages/CurrenciesList';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Layout>
        <AppHeader />
        <Layout.Content>
          <Switch>
            <Route exact path="/currencies">
              <CurrenciesList />
            </Route>

            <Route exact path="/">
              <CurrencyConverter />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </AppWrapper>
  );
}

export default App;
