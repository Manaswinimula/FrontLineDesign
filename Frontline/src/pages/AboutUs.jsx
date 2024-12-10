import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-page">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Welcome to Frontline! We are committed to delivering exceptional products and services tailored to meet your needs. 
      </p>
      <div className="about-us-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide outstanding value to our customers through innovation and dedication.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be a leader in our industry, known for integrity and excellence.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            Our passion for quality and commitment to customer satisfaction set us apart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
