import React from "react";
import "../../src/styles/home.css";
import heroImage from "../assets/computerImage.jpg"; 

const Home = () => {
  return (
    <div className="container">
    <section className="name">
       <h1>
          Hi, I'm Sumanth Koushik
        </h1>
    </section>
    <section className="home">
      
      <div className="home-content">
        {/* <span className="tag">Next.js 15 • TypeScript • shadcn/ui</span> */}
        <h1>
          Building clean, fast, and <br />
          accessible web and mobile apps.
        </h1>
        <p>
          I craft modern websites and products with a focus on performance and
          delightful user experiences.
        </p>
        <div className="buttons">
          <a href="/projects" className="btn btn-dark">
            View Projects
          </a>
          <a href="/contact" className="btn btn-light">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={heroImage} alt="Portfolio showcase" />
      </div>
    </section>
    </div>
  );
};

export default Home;
