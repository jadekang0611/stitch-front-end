import React from 'react';
import List from './Components/List';
import Collection from './Components/Collection';
import { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';

function App() {
   

   return (
      <>
         <nav>
            <Link to='/'>
               <h2>List</h2>
            </Link>
            <Link to='/collection'>
               <h2>Collection</h2>
            </Link>
         </nav>
         <main>
            <Switch>
               <Route
                  exact
                  path='/'
                  component={List}
               />

           <Route
             exact
             path='/collection'
             component={Collection}
           />
            </Switch>
         </main>
      </>
   );
}

export default App;
