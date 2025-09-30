import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="page about">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate developer who loves building modern web experiences
        with React, MUI, and Firebase. I focus on performance, accessibility,
        and delightful UX.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h2>Background</h2>
          <p>
            With experience across frontend and backend, I enjoy turning ideas
            into polished products. I've contributed to apps used by thousands
            of users and love collaborating with teams.
          </p>
        </div>

        <div className="about-card">
          <h2>Skills</h2>
          <ul>
            <li>React, MUI, Firebase</li>
            <li>Redux, REST APIs</li>
            <li>Node.js, Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
