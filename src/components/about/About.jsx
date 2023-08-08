import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";
import profileImage from "../../assets/remala.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Modal } from "antd";

const About = () => {
  // INI AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam milidetik)
      easing: "ease-in-out", // Gaya animasi
      once: true, // Animasi hanya terjadi sekali saat digulir
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="aboutContainer" id="about">
      <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={1000}
        style={{
          top: 25,
        }}
        bodyStyle={{ height: "79vh", overflow: "auto" }}
        className="modalContainer"
      >
        <div className="modalTop">
          <h1>PT. Remala Abadi</h1>
        </div>
        <hr />
        <div className="modalMiddle">
          <p>
            Adalah salah satu Internet Service Provider yang mana telah berdiri
            sejak tahun 2007 dibawah manajemen PT. Remala Abadi. Kami melayanai
            kebutuhan Akses Internet, Network & IT Solution yang menjadikan
            sebuah layanan Managed Services yang didukung dengan sumber daya
            manuasia yang profesional dan dukungan infrastruktur jaringan yang
            handal yang berupa jaringan Fiber Optic maupun Wireless yang
            menggunakan teknologi terbaru. Dengan selalu berfikir kreatif dan
            inovatif serta yakin dan optimis untuk dapat memberikan layanan
            serta solusi yang tepat, handal dan tentunya efektif dan efisien.
          </p>
        </div>
        <hr />
        <div className="modalLastMiddle">
          <h2>Key Features</h2>
          <p>
            Dengan kemampuan kami, serta dukungan yang maksimal dari seluruh
            mitra-kerja kami, maka kami yakin bahwa PT Remala Abadi akan mampu
            memberikan pelayanan yang maksimal dengan biaya yang jauh ebih
            kompetitif. PT. Remala Abadi berniat untuk tumbuh bersama dengan
            mitra-kerja, pelanggan, dan karyawan.
          </p>
        </div>
        <hr />
        <div className="modalBottom">
          <div className="bottomLeft">
            <h3>Our Vision</h3>
            <p>
              Menjadi Penyedia Layanan Internet& Solusiyang utama di Indonesia
              (Ultimate Internet Solution)
            </p>
          </div>
          <div className="bottomRight">
            <h3>Our Mission</h3>
            <p>
              Selalu berfikir kreatif dan inovatif serta berkomitmen agar dapat
              memberikan layanan serta solusi yang tepat dan handal yangdapat
              diandalkan oleh semua pelanggan.
            </p>
          </div>
        </div>
      </Modal>
      <div className="topContainer" data-aos="fade-up">
        <h1>Leading National Internet Business Group in Indonesia</h1>
      </div>
      <div className="bottomContainer">
        <div className="leftContainer" data-aos="fade-right">
          <img src={profileImage} alt="PT. Remala Abadi" />
        </div>
        <div className="rightContainer" data-aos="fade-left">
          <div className="rightTop">
            <h2>PT. Remala Abadi</h2>
            <p>2007, Jakarta</p>
          </div>

          <div className="rightBottom">
            <p>
              Perusahaan kami telah berpengalaman melayani kebutuhan layanan
              Telekomunikasi dan Internet di berbagai jenis usaha, baik di
              segmen Korporasi, Industri Telekomunikasi, Pemerintahan,
              Kementerian dan Lembaga, Perbankan, Pariwisata, Pendidikan, dll.
            </p>

            <a className="href" onClick={() => setModalOpen(true)}>
              <ArrowForwardIcon className="icon" /> Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
