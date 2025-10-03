import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="page about">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate developer who loves building modern web and mobile experiences
        with React, React Native with MERN stack. I focus on performance, accessibility,
        and delightful UX.
      </p>
      <p className="about-intro">
        I am a graduate of Master of Computer Apllications from PES University, Banglore in 2023.
        My specialization is in Full Stack Web Development and cybersecurity. 
        I have a strong foundation in both frontend and backend technologies. 
        From my college days I am into developing projects and learning new technologies.
        While I was studying I have devloped a project that visualises how doubley linked list works using HTML and CSS.
        My main project was on android app development where i hae developed an app that helps user to manager their bugets and expenses.
      </p>
      <p className="about-intro">
        Though, I was an android developer I have always been facinated about web development and the user experience it provides.
        During my tenure I have worked on several projects using HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.
        I have also worked with firebase for backend services and hosting.
        I am always eager to learn new technologies and improve my skills.
        Till now have worked on 9 defferent projects. I have worked on 
        e-commerce website, blog website, portfolio website, chat application, Sleep application, TV application, Company HRMS website and many more.
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
