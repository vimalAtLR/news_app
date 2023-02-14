import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<News pageSize={6} country='in' category="general" key="general"/>} />
              <Route exact path="/about" element={<News pageSize={6} country='in' category="about" key="about"/>} />
              <Route exact path="/sport" element={<News pageSize={6} country='in' category="sport" key="sport"/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
