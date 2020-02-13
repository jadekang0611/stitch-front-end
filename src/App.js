import React from 'react';
import List from './Components/List';
import Collection from './Components/Collection';
import { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
   return (
      <div className='background'>
         <nav>
            <Container className='nav-bar'>
               <Link to='/' className='link'>
                  <h2 className='nav-item'>See All Styles</h2>
               </Link>
               <Link to='/collection' className='link'>
                  <h2 className='nav-item'>Check My Collection</h2>
               </Link>
            </Container>
         </nav>

         <main>
            <Switch>
               <Route exact path='/' component={List} />

               <Route exact path='/collection' component={Collection} />
            </Switch>
         </main>
      </div>
   );
}

export default App;
