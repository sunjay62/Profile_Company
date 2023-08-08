import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./business2.css";
import Building from "../../assets/building.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Business = () => {
  // INI AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam milidetik)
      easing: "ease-in-out", // Gaya animasi
      once: true, // Animasi hanya terjadi sekali saat digulir
    });
  }, []);

  const navigate = useNavigate();

  const toRemala = () => {
    navigate("/remala");
  };
  const toFibermedia = () => {
    navigate("/fibermedia");
  };
  const toPc24cyber = () => {
    navigate("/pc24cyber");
  };
  const toAccelworks = () => {
    navigate("/accelworks");
  };
  const toSaas = () => {
    navigate("/saas");
  };

  return (
    <div className="businessContainer">
      <div
        className="topBusinessContainer"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <h1>Our Business Activity</h1>
      </div>

      <div className="bottomBusinessContainer">
        <div
          className="cardContainer"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <div className="cardTop">
            <img src={Building} alt="PT. " />
          </div>
          <div className="cardBottom">
            <h3>PT. Remala Abadi</h3>
            <p>
              2007 <br />
              Jakarta, Indonesia
            </p>
          </div>
          <hr />
          <div className="cardText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              ullam quae sit dolores at expedita voluptatum error distinctio,
              magni inventore?
            </p>
          </div>
          <a className="href" onClick={toRemala}>
            <ArrowForwardIcon className="icon" /> Read More
          </a>
        </div>
        <div
          className="cardContainer"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <div className="cardTop">
            <img src={Building} alt="PT. " />
          </div>
          <div className="cardBottom">
            <h3>PT. Fibermedia Indonesia</h3>
            <p>
              2007 <br />
              Jakarta, Indonesia
            </p>
          </div>
          <hr />
          <div className="cardText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              ullam quae sit dolores at expedita voluptatum error distinctio,
              magni inventore?
            </p>
          </div>
          <a className="href" onClick={toFibermedia}>
            <ArrowForwardIcon className="icon" /> Read More
          </a>
        </div>
        <div
          className="cardContainer"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <div className="cardTop">
            <img src={Building} alt="PT. " />
          </div>
          <div className="cardBottom">
            <h3>PT. PC24 Cyber</h3>
            <p>
              2007 <br />
              Jakarta, Indonesia
            </p>
          </div>
          <hr />
          <div className="cardText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              ullam quae sit dolores at expedita voluptatum error distinctio,
              magni inventore?
            </p>
          </div>
          <a className="href" onClick={toPc24cyber}>
            <ArrowForwardIcon className="icon" /> Read More
          </a>
        </div>
        <div
          className="cardContainer"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <div className="cardTop">
            <img src={Building} alt="PT. " />
          </div>
          <div className="cardBottom">
            <h3>PT. Accelworks</h3>
            <p>
              2007 <br />
              Jakarta, Indonesia
            </p>
          </div>
          <hr />
          <div className="cardText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              ullam quae sit dolores at expedita voluptatum error distinctio,
              magni inventore?
            </p>
          </div>
          <a className="href" onClick={toAccelworks}>
            <ArrowForwardIcon className="icon" /> Read More
          </a>
        </div>
        <div
          className="cardContainer"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="cardTop">
            <img src={Building} alt="PT. " />
          </div>
          <div className="cardBottom">
            <h3>PT. Saas Studio</h3>
            <p>
              2007 <br />
              Jakarta, Indonesia
            </p>
          </div>
          <hr />
          <div className="cardText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Commodiullam quae sit dolores at expedita voluptatum error
              distinctio,magni inventore?
            </p>
          </div>
          <a className="href" onClick={toSaas}>
            <ArrowForwardIcon className="icon" /> Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Business;
