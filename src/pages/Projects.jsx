import React, { useState } from "react";
import "../styles/projects.css";

import UGlogo from "../assets/UGlogo.jpg";
import ugcate from "../assets/ugcate.jpg";
import Xtendlogo from "../assets/xtentcrop.jpg";
import Xtendhome from "../assets/xtendhome.jpg";
import nidralogo from "../assets/nidralogo.jpg";
import categories from "../assets/categories.jpg";
import nidragraph from "../assets/nidragraph.jpg";

import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ✅ Project Data
const projects = [
  { 
    title: "TV Application", 
    description: "This is a full detailed blog style description of the portfolio project. You can explain the tech stack, features, challenges, and outcomes here. Add as much detail as you like to make it a real blog style content.",
    type: "mobile",
    images: [Xtendlogo, Xtendhome], 
    logo: Xtendlogo
  },
  { 
    title: "E-commerce Application", 
    description: "This is a detailed description about the E-commerce app. Write about Redux, Firebase integration, payment flow, product management, and responsive design in this blog style format.",
    type: "mobile",
    images: [UGlogo, ugcate], 
    logo: UGlogo
  },
  { 
    title: "Sleep Application", 
    description: "Here’s where you add the long-form blog description for your chat app project. Mention realtime updates with Firebase, authentication, chat rooms, and how you handled scalability issues.",
    type: "mobile",
    images: [nidralogo, categories, nidragraph],
    logo: nidralogo
  }
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="page projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => handleOpen(proj)}
          >
            <div className="card-front">
              <img src={proj.logo} alt={`${proj.title} logo`} className="project-logo" />
              <h2>{proj.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {selectedProject.title}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div style={{ display: "flex", gap: "1rem", height: "400px" }}>
              {/* Left: Scrollable Images */}
              <div style={{ flex: 1, overflowY: "auto", borderRight: "1px solid #ddd", paddingRight: "1rem" }}>
                {selectedProject.images.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`${selectedProject.title} ${i+1}`} 
                    style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} 
                  />
                ))}
              </div>

              {/* Right: Blog-style Description */}
              <div style={{ flex: 1, paddingLeft: "1rem", overflowY: "auto" }}>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Projects;
