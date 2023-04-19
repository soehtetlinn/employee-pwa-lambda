import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeDetails = ({ employeeId }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee details from Lambda function based on employeeId prop
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(
          `https://<YOUR_LAMBDA_FUNCTION_URL>/employees/${employeeId}`
        );
        setEmployee(response.data);
      } catch (error) {
        console.error(`Error fetching employee details for employeeId ${employeeId}:`, error);
      }
    };

    fetchEmployeeDetails();
  }, [employeeId]);

  if (!employee) {
    return <div>Loading employee details...</div>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Employee ID: {employee.EmployeeId}</p>
      <p>First Name: {employee.FirstName}</p>
      <p>Last Name: {employee.LastName}</p>
      {/* Render other employee details */}
    </div>
  );
};

export default EmployeeDetails;
