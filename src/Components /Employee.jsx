import React, { useState } from "react";
import employees from "../models/employee";
import EmployeeList from "./EmployeeList";
import RightComponent from "./RightComponent";

function Employee() {

  return (
    <div className="majorContainer">
      <EmployeeList />

      <RightComponent />
    </div>
  );
}
export default Employee;
