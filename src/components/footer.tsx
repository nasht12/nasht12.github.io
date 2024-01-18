import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-yellow-50'>
      <Link href="/">
        <p>
          <strong>Abhinash Tummala</strong>
        </p>
      </Link>
      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
        <div className="icon-wrapper">
          <a
            href="https://github.com/nasht12"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            href="https://linkedin.com/in/abhinashtummala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
