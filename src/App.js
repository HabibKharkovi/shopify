import React, { Component } from 'react';
import HomePage from './components/homePage-component/homePage-component';
import './App.scss';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <HomePage/>
      </div>
     );
  }
}
 
export default App;