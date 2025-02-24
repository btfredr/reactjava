"use client"

import React from 'react'
import Nav from '../components/Nav'
import axios from 'axios';

const Contact = () => {
    // State for saving the user's form input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // State for showing status messages to user
    const [status, setStatus] = useState("");

    // Handling change in input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    // Function to prevent page reload when submitting form
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    
  return (
    <>
        <Nav />

        <div className="container">

        </div>
    </>
  )
}

export default Contact