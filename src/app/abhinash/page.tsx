import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./about.module.css";

const About: React.FC = () => {

  return (
    <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
      <div className="w-8 h-8 inline-block mr-4">
        <a
          href="https://github.com/nasht12"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="w-8 h-8 inline-block mr-4">
        <a
          href="https://linkedin.com/in/abhinashtummala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="w-8 h-8 inline-block mr-4">
        <a
          href="https://instagram.com/abhi_nasht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="w-8 h-8 inline-block mr-4">
        <a
          href="https://instagram.com/abhi_nasht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} />{" "}
        </a>
      </div>
    </div>
  );
};

export default About;
