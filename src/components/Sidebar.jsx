import React from "react";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <ul className={"Sidebar"}>
        <li onClick={() => navigate("/")}>Dasboard</li>
        <li onClick={() => navigate("/machines")}>Create Machines</li>
        <li onClick={() => navigate("/workers")}>Create Workers</li>
      </ul>
      <p
      className="logout"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </p>
    </div>
  );
};

export default Sidebar;
