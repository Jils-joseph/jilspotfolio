// src/components/Projects.js
import React from "react";
import styled from "styled-components";

const Projects = () => {
  const projectData = [
    {
      title: "Accident Detection And Alert App",
      description: "Designed a mobile app utilizes sensors and machine learning algorithms to detectaccidents in real-time",
      image: "https://cdn.dribbble.com/users/207059/screenshots/16573416/media/4f24405796465a71b2691f94f5e5d1f8.gif",
      link: "#",
    },
    {
      title: "Canteen Management System",
      description: "Developed a web-based application to streamline canteen operations, including ordermanagement, inventory tracking",
      image: "https://www.boyanupps.wa.edu.au/wp-content/uploads/2021/10/Canteen-Ordering-Now-Online.jpg",
      link: "#",
    },
    {
      title: "File Upload Sysytem using AWS",
      description: "Built a secure web application using Node.js and AWS S3 for file uploads. Features include user authentication, AWS integration, and a professional UI",
      image: "https://www.loginradius.com/blog/static/1bc36a6b88cc1025d3852dc1ffe6eef6/03979/aws.png",
      link: "#",
    },
    
  ];

  return (
    <Section id="projects">
      <h2>My Projects</h2>
      <ProjectGrid>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: left;

  img {
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: #3f51b5;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    color: #00bcd4;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
