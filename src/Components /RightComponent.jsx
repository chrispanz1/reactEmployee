import React from "react";
import employees from "../models/employee";
import { useContext } from "react";
import { AppContext } from "../contexts/context";

function RightComponent() {
  let item = employees[0];
  let {current}=useContext(AppContext)
  console.log(current)
  return (
    <div className="rightContainer">
      <div className="wrapper">
        <h1>{current.name}</h1>
        <img src={current.src} alt="" className="pic" />
        <p>role: {current.role}</p>
        <p>phone number:{current.officenumber}</p>
  <p>email: {current.email}</p>
      </div>
    </div>
  );
}

export default RightComponent;
