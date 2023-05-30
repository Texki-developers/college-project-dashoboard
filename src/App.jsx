import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Machine from "./pages/Machines/Machine";
import Workers from "./pages/Workers/Workers";
import SignUp from "./pages/signup/signup";

function App() {
  const naviget = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      naviget("/");
    } else {
      naviget("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/machines" element={<Machine />} />
      <Route path="/workers" element={<Workers />} />
    </Routes>
  );
}

export default App;
