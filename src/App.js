import React, { Component } from 'react';
import './App.css';
import Navbar from './mycomponent/Navbar/Navbar'
import Router from './mycomponent/Router/Router';
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Navbar/>
          <Router/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
