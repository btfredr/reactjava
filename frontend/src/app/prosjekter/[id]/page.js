"use client"

import React, {useState, useEffect} from 'react'
import {useParams} from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import Nav from '@/app/components/Nav'

const ProjectPage = () => {
    const {id} = useParams(); // Getting project ID from URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8081/api/projects/${id}`) // Adding URL to API URL
            .then((response) => setProject(response.data))
            .catch((error) => console.log("Feil ved henting av prosjekt", error));
    }, [id]);

    if (!project) return <h1>Laster prosjekt...</h1>; // Displaying message to user to show progress

  return (
    <>
    <Nav />

    <div className="container">
    <div className="project-details">
        <Image 
            src={project.image} 
            alt={project.title} 
            width={600}  // Sett ønsket bredde
            height={400} // Sett ønsket høyde
            className="project-image"
        />
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>Lokasjon: {project.location}</p>
    </div>
    </div>
    </>
  )
}

export default ProjectPage;