import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="page about">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate developer who loves building modern web and mobile experiences
        with React Native and MERN stack. I focus on performance, accessibility,
        and providing a delightful UX.
      </p>
      <p className="about-intro">
        I am a graduate in Master of Computer Apllications from <a href="https://www.google.com/maps/place/PES+University/@12.934,77.501,17z" target="_blank">PES University, Banglore</a> in 2023.
        My specialization is in Full Stack Web Development and Cybersecurity. 
        I have a strong foundation in both frontend and backend technologies. 
        From my college days I am into developing projects and learning new technologies.
        While I was studying I have developed a project that visualises how doubley linked list works using HTML and CSS.
        My main project was on Android app development where i have developed an app that helps user to manage their buget and expenses.
      </p>
      <p className="about-intro">
        Though I was an Android developer I have always been facinated about web development and the user experience it provides.
        During my tenure I have worked on several projects using HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.
        I have also worked with Firebase for backend services and hosting.
        Till now have worked on different projects. I have worked on 
        a e-commerce website, a blog website, a portfolio website, a chat application, a Sleep application, a TV application, a Company HRMS website and many more.
        I am currently working as a freelance web developer and looking for opportunities to work with a team.
        I am open to internships and full-time opportunities.
        You can reach out to me via the contact form in the contact section.
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
