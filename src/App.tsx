import React from 'react';
import AppWrapper from './containers/AppWrapper';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import CurrencyConverter from './containers/CurrencyConverter';
import CurrenciesList from './containers/CurrenciesList';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/currencies">
              <Layout.Header>
                <Link to="/">
                  <Button type="primary">
                    <LeftOutlined />
                    Back to Converter
                  </Button>
                </Link>
              </Layout.Header>
              <Layout.Content>
                <CurrenciesList />
              </Layout.Content>
            </Route>

            <Route exact path="/">
              <Layout.Header>
                <Link to="/currencies">
                  <Button type="primary">
                    <RightOutlined />
                    Exchange Rates
                  </Button>
                </Link>
              </Layout.Header>
              <Layout.Content>
                <CurrencyConverter />
              </Layout.Content>
            </Route>
          </Switch>
        </Layout>
      </div>
    </AppWrapper>
  );
}

export default App;
