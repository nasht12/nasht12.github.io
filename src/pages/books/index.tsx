import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./books.module.css";

const About: React.FC = () => {
  const itemList2023 = [
    "The Buried Giant by Kazuo Ishiguro",
    "I am a Cat by Natsume Sōseki",
    "The Seven Moons of Maali Almeida by Shehan Karunatilaka",
    "The Pale King by David Foster Wallace",
    "Midnight children by Salman Rushdie",
    "The begining of the infinity by David Deutsch",
  ];
  const itemList2022 = [
    "The Ride Of A Life Time by Robert Iger",
    "The Moors last sigh by Salman Rushdie",
    "How the world really works by Vaclav Smil",
    "In other words by Jhumpa Lahari",
    "Factfulness by Hans Rosling",
    "Good Econonomics for Hard Times by Abhijit V Banerjee and Esther Duflo",
    "Sapiens by Yuval Noah Harari",
    "The Golden House by Salman Rushdie",
    "The wind up bird chronicle by Haruki Murakami",
    "The Norwegian Wood by Haruki Murakami",
    "The metamorphosis by Franz Kafka",
    "What kind of creatures are we by Noam Chomsky",
    "Billion Dollar Whale by Tom Wright, Bradley Hope",
  ];
  return (
    <Layout>
      <div>
        <h1 style={{ marginTop: "0.5rem" }}><strong>Reading List</strong></h1>
        <b>2023</b>
        <ul className={styles.list}>
          {itemList2023.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <b>2022</b>
        <ul className={styles.list}>
          {itemList2022.map((item1, index) => (
            <li key={index}>{item1}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;
