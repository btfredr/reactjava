"use client"

import React, {useState} from 'react'
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

    
/*
    try {
        // Sending a POST request to the API with the user's message
        await axios.post("http://localhost:8081/api/messages", formData, {
        headers: {"Content-Type": "application/json"},
        });
        
        // Showing success message to user
        setStatus("Meldingen ble sendt!");

        // Emptying the form after successful sending
        setFormData({name: "", email: "", message: "" });
    } catch (error) {
        // Showing error message if something goes wrong
        setStatus("Noe gikk galt, prøv igjen.");
    }
}
*/





  return (
    <>
        <Nav />

        <div className="container">

        </div>
    </>
  )
}

export default Contact