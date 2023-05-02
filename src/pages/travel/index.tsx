import React from "react";
import Layout from "../../components/Layout/Layout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import styles from "./travel.module.css";

const About: React.FC = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205710094123048/DSCF7548.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205709133615164/wenatchee_lake.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205711004274778/DSCF7611.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205298226053230/DSCF8881.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205711817986090/leavenworth_road.JPG",
    // "https://via.placeholder.com/900x300?text=Slide+1",
  ];
  return (
    <Layout>
      <div style={{ marginTop: "0.5rem" }}>
        <h1>Travel</h1>
        <div className="imageSliderContainer">
          <p>Washington</p>
          <ImageSlider images={images} />
        </div>
        <p>Oregon</p>
        <p>California</p>
        <p>Colorado</p>
        <p>New York</p>
        <p>Nevada</p>
        <p>Utah</p>
        <p>Arizaona</p>
        <p>Montana</p>
        <p>Wyoming</p>
        <p>Idaho</p>
        <p>Florida</p>
        <p>New York</p>
        <p>New Jersey</p>
        <p>Texas</p>
        <p>Indiana</p>
        <p>Illinois</p>
        <p>Massachusetts</p>
        <p>Lousiana</p>
      </div>
    </Layout>
  );
};

export default About;
