'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Når backend er oppe, hent ansatte fra backend (bruk port 8081)
    axios.get('http://localhost:8081/api/employees', { withCredentials: true })  // Backendporten er 8081
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
        
      })
      .catch(error => {
        console.error("Det oppstod en feil med å hente ansatte.", error);
      });
  }, []);

  return (
    <div className="employeeList">
      <h1>Oversikt over ansatte</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
