import '../../styles/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GwerhTheBard from '../pages/GwerhTheBard/GwerhTheBard';
import { Adventures } from '../pages/Adventures/Adventures.component';
import { SoundPLayer } from '../components/Utils/SoundPlayer/SoundPlayer.component';
import { Account } from '../pages/Account/Account.component';
import { Menu } from '../components/Menu/Menu.component';

function App() {
  return (
      <div className="App"> 
          <Switch>
            <Route exact path='/'>
              <Home/> 
            </Route>
            <Route path='/account/:id'>
              <Account/>
            </Route>
            <Route path='/adventures'>
              <Adventures/>
            </Route>
            <Route path='/adventures/gwerh-the-bard'>
              <GwerhTheBard/>
            </Route>
          </Switch>
          <Menu/>
          <SoundPLayer/>
      </div>
  );
}

export default App;
