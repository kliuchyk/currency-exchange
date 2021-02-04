import React from 'react';
import AppWrapper from './containers/AppWrapper';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';

import AppHeader from './components/AppHeader';
import CurrencyConverter from './containers/CurrencyConverter';
import CurrenciesList from './containers/CurrenciesList';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <div className="App">
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
      </div>
    </AppWrapper>
  );
}

export default App;
