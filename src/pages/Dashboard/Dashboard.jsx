import React, { useState, useEffect } from "react";
import "./style.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import axios from "axios";

const Dashboard = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [falg, setFlag] = useState(false);

  useEffect(() => {
    // Call the first API
    axios
      .get("http://localhost:5000/api/workers")
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API 1:", error);
      });

    // Call the second API
    axios
      .get("http://localhost:5000/api/mechines")
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API 2:", error);
      });
  }, [falg]);

  return (
    <div className={"Dashboard"}>
      <Header />
      <main>
        <Sidebar />
        <div>
          <div className="cards">
            {data1.map((item, index) => (
              <Card
                flag={setFlag}
                key={`card1-${index}`}
                type={"worker"}
                data={item}
              />
            ))}
            {data2.map((item, index) => (
              <Card
                flag={setFlag}
                key={`card2-${index}`}
                type={"machine"}
                data={item}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
