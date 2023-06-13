import React from "react";
import "./AboutUs.css";
import servers from "./img1.jpg";
import security from "./img2.jpg";
import global from "./img3.jpg";

const AboutUs = () => {
  const workInfoData = [
    {
      image: servers,
      title: "Robust Servers",
      text: "Explore the powerful servers we utilize to ensure seamless currency exchange operations.",
    },
    {
      image: security,
      title: "Security Systems",
      text: "Learn about our top-notch security systems that safeguard your foreign exchange transactions.",
    },
    {
      image: global,
      title: "Global Presence",
      text: "Discover our extensive global presence and our ability to provide foreign exchange services worldwide.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">About our work</h1>
        <p className="primary-text">
          Our mission is to simplify the process of foreign exchange and empower
          individuals and businesses to navigate global markets with confidence.
          We combine cutting-edge technology, robust security measures, and
          personalized support to offer a comprehensive and reliable foreign
          exchange experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
