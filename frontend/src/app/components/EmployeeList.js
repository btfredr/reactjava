import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetching employees from backend
        axios.get("http://localhost:8081/api/employees")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error("There was an error while fetching employees.", error);
            });
    }, []);
    
  return (
    <div>EmployeeList</div>
  )
}

export default EmployeeList