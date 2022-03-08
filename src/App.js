import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Discover } from './Components';
import {Favourites} from './Components';
import {Search} from './Components';
import {PlayLists} from './Components'
import { MusicPreview } from './Components/MusicPreview';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Switch>
        
        <Route path="/search">
       <Search/> 
        </Route>
        <Route path="/favourites">
       <Favourites/> 
        </Route>
        <Route path="/playlist">
       <PlayLists/> 
        </Route>
        <Route path="/chart">
       <PlayLists/> 
        </Route>
        <Route path="/musicpreview">
       <MusicPreview/> 
        </Route>
        <Route exact path="/">
       <Discover/> 
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
