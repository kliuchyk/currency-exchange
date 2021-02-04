import React from 'react';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { TEXTS } from './config';
import './styles.css';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <Link to="/" className="link logo">
        {TEXTS.LINKS.LOGO}
      </Link>

      <nav className="nav-menu">
        <Link to="/" className="link">
          {TEXTS.LINKS.CONVERTER}
        </Link>

        <Link to="/currencies" className="link">
          {TEXTS.LINKS.RATES}
        </Link>

        <Link to="/contacts" className="link">
        {TEXTS.LINKS.CONTACTS}
        </Link>

        <Link to="/create-account" className="">
          <Button className="account-btn">Create account</Button>
        </Link>
      </nav>
    </Header>
  );
};

export default AppHeader;
