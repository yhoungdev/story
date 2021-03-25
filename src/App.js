import React from 'react';
import './bootstrap.css';
import './App.css';
import Splash from './components/splash'
import Error from './components/error'
import Main from './components/main'

import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {Button} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' component={Splash}/>
            <Route path='/main' component={Main}/>
            <Route component={Error}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
