import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventdefault();
    const data = {
      email: uname,
      password,
    };
    localStorage.setItem("user", true);
    navigate("/");
    axios
      .post("http://localhost:5000/api/auth/admin-signup", data)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className={"Login"}>
      <form action="">
        <h1>SignUp</h1>
        <input
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          placeholder="email"
          type="email"
          required
          name=""
          id=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          name=""
          required
          id=""
        />
        <p onClick={() => navigate("/login")}>Already have an Account ? </p>
        <button type="button" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
