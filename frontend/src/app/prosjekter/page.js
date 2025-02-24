"use client"

import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Når backend er oppe, hent ansatte fra backend (bruk port 8081)
    axios.get('http://localhost:8081/api/projects', { withCredentials: true })  // Backendporten er 8081
      .then(response => {
        setProjects(response.data);
        console.log(response.data);
        
      })
      .catch(error => {
        console.error("Det oppstod en feil med å hente ansatte.", error);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
      <h1 className="project-title">Våre Prosjekter</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.location}</p>
              <p>{project.description}</p>
            </div>
            <Link href={`/prosjekter/${project.id}`}>
                  <button className="read-more-btn">Les mer</button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Projects;