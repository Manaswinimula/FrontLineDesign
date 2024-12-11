import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        We'd love to hear from you! Reach out through any of the channels below.
      </p>

      <div className="contact-card-container">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>Drop us an email anytime!</p>
          <a href="mailto:contact@frontline.com" className="contact-link">
            contact@frontline.com
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>Call us for immediate assistance:</p>
          <a href="tel:+919704714412" className="contact-link">
            +91 9704714412
          </a>
        </div>

        <div className="contact-card">
          <div className="social-icons">
            <a href="https://www.instagram.com/charan__x7/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://x.com/Sricharan000" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
          <h3>Social Media</h3>
          <p>Connect with us on our social platforms!</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
