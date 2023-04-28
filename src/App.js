import './App.css';
import icon from './design/logo.png'
import Home from './components/Home/Home';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GwerhTheBard from './components/Pages/aventuras/GwerhTheBard';
import Ainulindalë from './components/Pages/aventuras/Ainulindalë';


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
