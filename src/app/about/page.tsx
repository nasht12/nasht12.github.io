import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
// import Layout from "../../components/Layout/Layout";
import { Canvas } from '@react-three/fiber';
import SphereWithLight from '@/components/SphereWithLight/SphereWithLight';
import WalkingMan from '@/components/WalkingMan/WalkingMan';
import FlamingoFlight from '@/components/FlamingoFlight/FlamingoFlight';
import styles from "./about.module.css";

const About: React.FC = () => {

  return (
    <>
      {/* Your page content goes here */}{" "}
      <p style={{ marginTop: "0.5rem" }}>
        Software engineer based in Seattle with a Bachelor and Master’s Degree
        in Computer Science. Interested in all things web3 and AI.
      </p>
      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
        <div className="icon-wrapper">
          <a
            href="https://github.com/nasht12"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              // className="iconscaletransition"
            />
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            href="https://linkedin.com/in/abhinashtummala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              // className="iconscaletransition"
            />
          </a>
        </div>
        <p
          style={{
            display: "inline-block",
            marginRight: "0.5rem",
            marginLeft: "1rem",
          }}
        >
          Can be reached at
        </p>
        <span>abhinash.t12@gmail.com</span>
      </div>
      {/* <div>
      <Canvas>
      <SphereWithLight />
    </Canvas>
    </div> */}

    <div style={{ marginTop: "10px"}}>
    {/* <WalkingMan /> */}
<FlamingoFlight />
    </div>
     </>
  );
};

export default About;
