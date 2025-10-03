import React from "react";
import "../../src/styles/home.css";
import heroImage from "../assets/computerImage.jpg"; 
import { useState, useEffect } from "react";

const Home = () => {

   const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Sumanth Koushik";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);


  return (
    <div className="container">
   <section className="name">
       <h1 className="typing-effect">
          {displayText}<span className="cursor">|</span>
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
