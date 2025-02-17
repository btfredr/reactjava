'use client';

import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetching employees from backend
        axios.get("http://localhost:5000/api/employees")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error("There was an error while fetching employees.", error);
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
  )
}

export default EmployeeList