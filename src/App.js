import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


class App extends Component {
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({progress});
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={6} country='in' category="general" key="general"/>} />
              <Route exact path="/about" element={<News setProgress={this.setProgress} pageSize={6} country='in' category="about" key="about"/>} />
              <Route exact path="/sport" element={<News setProgress={this.setProgress} pageSize={6} country='in' category="sport" key="sport"/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
