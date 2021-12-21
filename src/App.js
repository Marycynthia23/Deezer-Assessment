import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Discover } from './Components';
import {Favourites} from './Components';
import {Search} from './Components';
import {PlayLists} from './Components'


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Switch>
        <Route path="/">
       <Discover/> 
        </Route>
        <Route path="/favourites">
       <Favourites/> 
        </Route>
        <Route path="/search">
       <Search/> 
        </Route>
        <Route path="/playlist">
       <PlayLists/> 
        </Route>
        <Route path="/chart">
       <PlayLists/> 
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
