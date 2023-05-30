import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/Header";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const Workers = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [rent, setRent] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the request body
    if (
      image === "" ||
      name === "" ||
      rent === "" ||
      phoneNumber === "" ||
      description === "" ||
      category === "" ||
      location === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("rent", rent);
    formData.append("phone", phoneNumber);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("location", location);

    try {
      // Make the API request
      const response = await axios.post(
        "http://localhost:5000/api/workers/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Check the response status
      if (response.data?._id) {
        alert("Successfully Created");
        console.log("API response:", response.data);
        setImage("");
        setName("");
        setRent("");
        setCategory("");
        setPhoneNumber("");
        setDescription("");
        setLocation("");
      } else {
        alert("sorry. something went to wrong");
      }
    } catch (error) {
      alert("not Created");
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="Dashboard">
      <Header />
      <main>
        <Sidebar />
        <div className="content">
          <div className="boxs">
            <form onSubmit={handleSubmit}>
              <h3 align="center">Create The Ad</h3>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="plumber">Plumber</option>
                  <option value="painter">Painter</option>
                </select>
              </div>
              <div>
                <label htmlFor="rent">Rent</label>
                <input
                  className="input"
                  type="number"
                  id="rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="input"
                  type="number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  className="input"
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <input
                  className="input"
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workers;
