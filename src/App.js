import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

class App extends Component {
  a = "Greetings"
  render() {
    return (
      <>
        <NavBar />
        <News />
      </>
    );
  }
}

export default App;
