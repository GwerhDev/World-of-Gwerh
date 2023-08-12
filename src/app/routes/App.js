import '../../styles/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GwerhTheBard from '../pages/GwerhTheBard/GwerhTheBard';


function App() {
  return (
      <div className="App"> 
          <Switch>
            <Route exact path='/'>
              <Home /> 
            </Route>
            <Route path='/adventures'>
              
            </Route>
            <Route path='/adventures/gwerh-the-bard'>
              <GwerhTheBard />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
