import React from "react";
import employees from "../models/employee";
import { AppContext } from "../contexts/context";
import { useContext } from "react";


function EmployeeList() {
  let {setCurrent}=useContext(AppContext)
  return (
    <div className="leftContainer">
      <h1>Employee Directory</h1>
      <h2>Our employees</h2>

      <hr></hr>
      {employees.map((item, index) => {
        return (
          <div className="wrapper" onClick={()=>{setCurrent(item)}}>
            <h1>{item.name}</h1>
            <img src={item.src} alt="" className="pic" />
            
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeList;
