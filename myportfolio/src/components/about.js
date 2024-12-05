// src/components/About.js
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <Content>
        <TextContainer>
          <h2>About Me</h2>
          <p>
            Hi, I'm Jils Joseph, a passionate Full Stack Software Developer with a knack for building secure and scalable web applications. I specialize in modern web technologies like React, Node.js, and AWS. With a strong background in both front-end and back-end development, I thrive on solving challenging problems and delivering user-friendly solutions.
          </p>
          <Skills>
            <h3>Skills:</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>AWS S3</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Database Management</li>
            </ul>
          </Skills>
          <Hobbies>
            <h3>Hobbies:</h3>
            <ul>
              <li>Exploring new technologies</li>
              <li>Playing chess</li>
              <li>Traveling and photography</li>
            </ul>
          </Hobbies>
          <Achievements>
            <h3>Achievements:</h3>
            <ul>
              <li>Developed a secure file upload system using AWS S3</li>
              <li>Completed certifications in Full Stack Development</li>
            </ul>
          </Achievements>
        </TextContainer>
      </Content>
    </Section>
  );
};

export default About;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00bcd4;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #3f51b5;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const Skills = styled.div`
  h3 {
    margin-bottom: 0.5rem;
    color: #3f51b5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      background-color: #e0f7fa;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      display: inline-block;
      color: #00796b;
    }
  }
`;

const Hobbies = styled.div`
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #3f51b5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      padding: 0.3rem 0;
      font-style: italic;
    }
  }
`;

const Achievements = styled.div`
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #3f51b5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      padding: 0.3rem 0;
      font-weight: bold;
      color: #444;
    }
  }
`;

const ContactButton = styled.div`
  margin-top: 2rem;

  button {
    padding: 0.8rem 2rem;
    background-color: #3f51b5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #00bcd4;
    }
  }
`;
