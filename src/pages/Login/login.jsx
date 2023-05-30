import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const data = {
      email: uname,
      password,
    };
    axios
      .post("http://localhost:5000/api/auth/admin-login", data)
      .then((res) => {
        if (res?.data?.status === "error") {
          alert(res.data.message)
        } else {
          alert('Success')
          localStorage.setItem("user", true);
          navigate("/");
        }
      });
  };
  return (
    <div className={"Login"}>
      <form action="">
        <h1>Login</h1>
        <input
          onChange={(e) => setUname(e.target.value)}
          placeholder="email"
          type="email"
          name=""
          id=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          name=""
          id=""
        />
        <p onClick={() => navigate("/signup")}>Create new Account ? </p>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
