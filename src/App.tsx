import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/mainPages/home";
import { Login } from "./components/mainPages/login";
import { LiveStatus } from "./components/mainPages/liveStatus";
import { Timing } from "./components/mainPages/timing";
import { appContext } from "./context/context";

function App() {
  const [stationCode, setStationCode] = useState("");
  const [timingData, setTimingData] = useState([]);
  return (
    <appContext.Provider value={{ stationCode, setStationCode, timingData,setTimingData  }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="liveStatus/:trainNo" element={<LiveStatus />} />
          <Route path="home" element={<Home />} />
          <Route path="timing/:stationName" element={<Timing />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
}

export default App;
