import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/homePage-component/homePage-component';
import Hats from './components/hatsPage-component/hatsPage-component';
import HatDetails from './components/hatDetails-component/hatDetails-component';
import Jackets from './components/jacketsPage-component/jacketsPage-component';
import './App.scss';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/hats" component={Hats}/>
            <Route path="/hats/:hatId" component={HatDetails}/>
            <Route path="/jackets" component={Jackets}/>
            <Redirect to="/" />
          </Switch>
      </div>
     );
  }
}
 
export default App;