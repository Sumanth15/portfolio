import React from "react";
import { SiMongodb, SiExpress, SiRedux, SiMui, SiMysql } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";   // Android Studio Icon
import { SiAndroid } from "react-icons/si"; 
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
        I am a graduate in Master of Computer Apllications from <a href="https://www.google.com/maps/place/PES+University/@12.934,77.501,17z" target="_blank">PES University, Bangalore</a>,in 2023.
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

      <div className="tech-stack-section">
        <h2>Technologies I've Worked With</h2>
        <div className="tech-icons">
          <div className="tech-icon" title="Android">
            <i className="fab fa-android"></i>
            <span>Android</span>
          </div>
          {/* <div className="tech-icon" title="Android Studio">
            <i className="fas fa-mobile-alt"></i>
            <span>Android Studio</span>
          </div> */}
          <div className="tech-icon">
  <SiAndroidstudio size={30} /> <span>Android Studio</span>
</div>

          <div className="tech-icon" title="React Native">
            <i className="fab fa-react"></i>
            <span>React Native</span>
          </div>
          <div className="tech-icon" title="React">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="tech-icon" title="Next.js">
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
            </svg>
            <span>Next.js</span>
          </div>
          {/* <div className="tech-icon" title="MongoDB">
            <i className="fas fa-database"></i>
            <span>MongoDB</span>
          </div> */}
          <div className="tech-icon">
  <SiMongodb /> <span>MongoDB</span>
</div>
         <div className="tech-icon">
  <SiExpress /> <span>Express</span>
</div>
          <div className="tech-icon" title="Node.js">
            <i className="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div className="tech-icon" title="HTML5">
            <i className="fab fa-html5"></i>
            <span>HTML</span>
          </div>
          <div className="tech-icon" title="CSS3">
            <i className="fab fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div className="tech-icon" title="JavaScript">
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-icon" title="Bootstrap">
            <i className="fab fa-bootstrap"></i>
            <span>Bootstrap</span>
          </div>
          <div className="tech-icon" title="Tailwind CSS">
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
            <span>Tailwind</span>
          </div>
          <div className="tech-icon">
  <SiRedux /> <span>Redux</span>
</div>
          <div className="tech-icon" title="Git">
            <i className="fab fa-git-alt"></i>
            <span>Git</span>
          </div>
          <div className="tech-icon" title="Figma">
            <i className="fab fa-figma"></i>
            <span>Figma</span>
          </div>
          <div className="tech-icon" title="Java">
            <i className="fab fa-java"></i>
            <span>Java</span>
          </div>
          {/* <div className="tech-icon" title="SQL">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div> */}
          
<div className="tech-icon">
  <SiMysql /> <span>SQL</span>
</div>
          <div className="tech-icon" title="AWS">
            <i className="fab fa-aws"></i>
            <span>AWS</span>
          </div>
          <div className="tech-icon">
  <SiMui /> <span>MUI</span>
</div>
          {/* <div className="tech-icon" title="Material UI">
            <i className="fas fa-palette"></i>
            <span>MUI</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;