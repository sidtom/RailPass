import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './components/mainPages/home';
import { Login } from './components/mainPages/login';
import { LiveStatus } from './components/mainPages/liveStatus';
import { Timing } from './components/mainPages/timing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="liveStatus/:trainNo" element={ <LiveStatus/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="timing/:stationName" element={ <Timing/> } />
      </Routes>
    </div>
  );
}

export default App;
