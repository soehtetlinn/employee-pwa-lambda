import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees data from Lambda function
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://i5z6ubo553.execute-api.us-east-2.amazonaws.com/test/employees"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>{employee.FirstName} {employee.LastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
