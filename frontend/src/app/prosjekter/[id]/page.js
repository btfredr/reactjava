import React, {useState, useEffects} from 'react'
import {useParams} from 'next/navigation'
import axios from 'axios'

const ProjectPage = () => {
    const {id} = useParams(); // Getting project ID from URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios
            .get(`http:localhost:8081/api/projects/${id}`) // Adding URL to API URL
            .then((response) => setProject(response.data))
            .catch((error) => console.log("Feil ved henting av prosjekt", error));
    }, [id]);

    if (!project) return <h1>Laster prosjekt...</h1>; // Displaying message to user to show progress

  return (
    <div className="project-details">
        <Image src={project.image} />
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>Lokasjon: {project.location}</p>
    </div>
  )
}

export default page