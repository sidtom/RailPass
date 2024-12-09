import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/mainPages/home";
import { Login } from "./components/mainPages/login";
import { LiveStatus } from "./components/mainPages/liveStatus";
import { Timing } from "./components/mainPages/timing";
import { appContext } from "./context/context";
import Container from "@mui/material/Container";

function App() {
  const [stationCode, setStationCode] = useState("");
  const [timingData, setTimingData] = useState([]);
  return (
    <appContext.Provider
      value={{ stationCode, setStationCode, timingData, setTimingData }}
    >
      <Container maxWidth="xl" className="mainContainer">
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="liveStatus/:trainNo" element={<LiveStatus />} />
            <Route path="home" element={<Home />} />
            <Route path="timing/:stationName" element={<Timing />} />
          </Routes>
        </div>
      </Container>
    </appContext.Provider>
  );
}

export default App;
