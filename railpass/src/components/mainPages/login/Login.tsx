import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";
import { loginValidation } from "../../../services/formServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const loginValid = loginValidation(username, password);
    if (loginValid) {
      navigate("/home");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <Box>
      <form className="formContainer" onSubmit={handleSubmit}>
        <TextField
          sx={{ marginTop: "20px" }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "20px" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={{ marginTop: "20px" }} variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
