import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './components/home';
import { Login } from './components/login';
import { Register } from './components/register';
import { Timing } from './components/timing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="timing" element={ <Timing/> } />
      </Routes>
    </div>
  );
}

export default App;
