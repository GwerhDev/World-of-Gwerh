import '../../styles/App.css';
import icon from '../../assets/images/png/logo.png'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GwerhTheBard from '../pages/Adventures/GwerhTheBard';


function App() {
  return (
      <div className="App"> 
          <Switch>
            <Route exact path='/'>
              <Home /> 
            </Route>
            <Route path='/adventures/gwerh-the-bard'>
              <GwerhTheBard />
            </Route>
          </Switch>
        <div className="icon">
          <img className="icon" src={icon} alt="" />
        </div>
      </div>
  );
}

export default App;
