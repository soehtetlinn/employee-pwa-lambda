import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    EmployeeId: "",
    FirstName: "",
    LastName: "",
    // Add other employee data fields here
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send POST or PUT request to Lambda function to create/update employee
      await axios.post("https://<YOUR_LAMBDA_FUNCTION_URL>/employees", employeeData);
      // Handle success, e.g., show success message, reset form, refresh employee list
    } catch (error) {
      console.error("Error creating/updating employee:", error);
    }
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Render form fields for employee data */}
        <input
          type="text"
          name="EmployeeId"
          value={employeeData.EmployeeId}
          onChange={handleChange}
          placeholder="Employee ID"
        />
        <input
          type="text"
          name="FirstName"
          value={employeeData.FirstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="LastName"
          value={employeeData.LastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        {/* Render other form fields for employee data */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
