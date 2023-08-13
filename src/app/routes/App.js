import '../../styles/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GwerhTheBard from '../pages/GwerhTheBard/GwerhTheBard';
import { Adventures } from '../pages/Adventures/Adventures.component';


function App() {
  return (
      <div className="App"> 
          <Switch>
            <Route exact path='/'>
              <Home/> 
            </Route>
            <Route path='/adventures'>
              <Adventures/>
            </Route>
            <Route path='/adventures/gwerh-the-bard'>
              <GwerhTheBard/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
