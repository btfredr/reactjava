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
            <div className="contact-container">
                <h1>Kontakt oss</h1>
                <p>Har du spørsmål? Send oss en melding, så svarer vi så snart vi kan!</p>

                {status && <p className="status-message">{status}</p>}

                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Navn:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">E-post:</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Melding:</label>
                    <textarea 
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact