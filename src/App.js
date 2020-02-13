import React from 'react';
import List from './Components/List';
import Collection from './Components/Collection';
import { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import logo from './STITCH.png';

function App() {
  return (
    <div className="background">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" width="250" height="250" />
      </div>
      <nav>
        <Container className="nav-bar">
          <Link to="/" className="link">
            <h2 className="nav-item">All Styles</h2>
          </Link>

          <Link to="/collection" className="link">
            <h2 className="nav-item">Collection</h2>
          </Link>
        </Container>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={List} />

          <Route exact path="/collection" component={Collection} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
