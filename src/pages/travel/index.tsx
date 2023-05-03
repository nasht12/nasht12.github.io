import React from "react";
import Layout from "../../components/Layout/Layout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import styles from "./travel.module.css";

const About: React.FC = () => {
  const Washington = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205710094123048/DSCF7548.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205709133615164/wenatchee_lake.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205711004274778/DSCF7611.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205298226053230/DSCF8881.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1100205711817986090/leavenworth_road.JPG",
    // "https://via.placeholder.com/900x300?text=Slide+1",
  ];

  const colorado = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365209529262130/DSCF2147.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365210351354027/DSCF2185.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365210917576744/DSCF2188.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365212012298310/DSCF2256.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365212976980008/DSCF2276.JPG"
  ];

  const idaho = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365777291219117/DSCF1386.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365778377551932/DSCF1406.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365779409342485/DSCF1484.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365780134961193/DSCF1489.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103365780927688714/DSCF4048.JPG"
  ];
  const oregon = [
    "",
    "",
    "",
    "",
    ""
  ];
  const california = [
    "",
    "",
    "",
    "",
    ""
  ];
  const utah = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1103370829607223396/DSCF2050.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103370830819364975/DSCF2062.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103370833424040057/DSCF2042.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103370836515237950/DSCF1982.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103370838125854780/DSCF1835.JPG"
  ];
  const wyoming = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1103367063411621908/DSCF2411.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103367065454248097/DSCF2634.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103367066435731476/DSCF2649.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103367067517845625/DSCF2707.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103367068805513316/DSCF3213.JPG"
  ];
  const montana = [
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366545431875604/DSCF3282.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366546723704892/DSCF4033.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366547839385631/DSCF3888.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366549164806214/DSCF3756.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366551308079135/DSCF3525.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366552683806770/DSCF3420.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366553740791908/DSCF3466.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366554759991416/DSCF3752.JPG",
    "https://cdn.discordapp.com/attachments/416094051339862016/1103366556831973417/DSCF3788.JPG"
  ];

  return (
    <Layout>
      <div style={{ marginTop: "0.5rem" }}>
        {/* <h1>Travel</h1> */}
        <div className="imageSliderContainer">
          <p>Washington</p>
          <ImageSlider images={Washington} />
        </div>
        <div className="imageSliderContainer">
          <p>Colorado</p>
          <ImageSlider images={colorado} />
        </div>
        <div className="imageSliderContainer">
          <p>Utah</p>
          <ImageSlider images={utah} />
        </div>
        <div className="imageSliderContainer">
          <p>Idaho</p>
          <ImageSlider images={idaho} />
        </div>
        <div className="imageSliderContainer">
          <p>wyoming</p>
          <ImageSlider images={wyoming} />
        </div>
        <div className="imageSliderContainer">
          <p>montana</p>
          <ImageSlider images={montana} />
        </div>
        <div className="imageSliderContainer">
          <p>Idaho</p>
          <ImageSlider images={idaho} />
        </div>
        <p>Oregon</p>
        <p>California</p>
        <p>New York</p>
        <p>Nevada</p>
        <p>Arizaona</p>
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
