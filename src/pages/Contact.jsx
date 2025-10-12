import React, { useState } from "react";
import { Typography } from "@mui/material";
import { saveContactMessage } from "../firebase";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

// Initialize EmailJS with your public key
emailjs.init("jif2GYP6IJ2RuzmA9"); // Replace with your EmailJS public key

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (form.message.length > 500) {
      alert("Message too long! Maximum 500 characters allowed.");
      return;
    }

    setLoading(true);

    try {
      // Save feedback to Firestore
      const id = await saveContactMessage(form.name, form.email, form.message);
      console.log("idididididididididid",id);
      

      if (id) {
        // Send email via EmailJS
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "sumanthkoushiksd@gmail.com" // Your email
        };

        console.log("tptptptptptptptptp",templateParams);
        

        await emailjs.send(
          "service_tk58637",   // Replace with your EmailJS service ID
          "template_64noa7m",  // Replace with your EmailJS template ID
          templateParams
        );

        // Show success and reset form
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="heading-subline">
          <Typography variant="h4" className="contact-title">
            Contact Me
          </Typography>
          <Typography variant="body1" className="contact-subtitle">
            Have a question or a project in mind? Let's connect.
          </Typography>
        </div>

        {success && <p className="success-msg">✅ Message sent successfully!</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            rows="4"
            maxLength="500"
            required
          />

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

       <div className="contact-footer">
          <p>
            Prefer email? Reach me at{" "}
            <a href="mailto:sumanthkoushiksd@gmail.com">
              sumanthkoushiksd@gmail.com
            </a>
          </p>
          <div className="social-links">
            <a 
              href="https://github.com/Sumanth15" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/sumanth_koushik/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
