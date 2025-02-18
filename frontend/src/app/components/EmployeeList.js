'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [backendPort, setBackendPort] = useState('');

  useEffect(() => {
    // Hente porten fra backend
    axios.get('http://localhost:5000/api/port')
      .then(response => {
        setBackendPort(response.data);  // Setter den dynamiske porten
        console.log(response);
        
      })
      .catch(error => {
        console.error("There was an error fetching the backend port.", error);
      });
  }, []);

  useEffect(() => {
    if (backendPort) {
      // Når porten er tilgjengelig, hent ansatte fra backend
      axios.get(`http://localhost:${backendPort}/api/employees`)
        .then(response => {
          setEmployees(response.data);
        })
        .catch(error => {
          console.error("There was an error while fetching employees.", error);
        });
    }
  }, [backendPort]);

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
