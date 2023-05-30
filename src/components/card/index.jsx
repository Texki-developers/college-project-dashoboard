import React from "react";
import "./style.scss";
import axios from "axios";

const Card = ({ data, type, flag }) => {
  const onDelete = () => {
    if (type === "machine") {
      axios
        .delete(`http://localhost:5000/api/mechines/machine/${data?._id}`)
        .then((res) => {
          flag((p) => !p);
          alert("successfully Deleted");
        });
    } else {
      axios
        .delete(`http://localhost:5000/api/workers//work/${data?._id}`)
        .then((res) => {
          flag((p) => !p);
          alert("successfully Deleted");
        });
    }
  };
  console.log(data);
  return (
    <div className={"Card"}>
      <img src={data?.image} alt="" />
      <div className="content-box">
        <div>
          <h2>{data.name}</h2>
          <p>{type}</p>
        </div>
        <div className="price-delete">
          <h2>${data.rent}</h2>
          <p className="delete" onClick={onDelete}>
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
