import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./books.module.css";

const About: React.FC = () => {
  const itemList = [
    "I am a Cat by Natsume Sōseki",
    "The Seven Moons of Maali Almeida by Shehan Karunatilaka",
    "The Pale King by David Foster Wallace",
    "Midnight children by Salman Rushdie",
  ];
  return (
    <Layout>
      <div>
        <h1>Reading List</h1>
        <p>2023</p>
        <ul className={styles.list}>
          {itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;
