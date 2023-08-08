import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Contact = () => {
  // INI AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam milidetik)
      easing: 'ease-in-out', // Gaya animasi
      once: true, // Animasi hanya terjadi sekali saat digulir
    });
  }, []);

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.164424508567!2d106.83964587416583!3d-6.242049461120806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d19cb3768d%3A0xa46b6d551edecaa3!2sPT%20Remala%20Abadi!5e0!3m2!1sid!2sid!4v1687421233204!5m2!1sid!2sid"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map"
        data-aos="fade-down"
      ></iframe>

      <div className="contact">
        <h1 data-aos="fade-up" className="contactText">
          Get In Touch
        </h1>
        <div className="row">
          <form action="" data-aos="fade-right">
            <div className="input-group">
              <PersonOutlinedIcon className="icon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <EmailOutlinedIcon className="icon" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-group">
              <LocalPhoneOutlinedIcon className="icon" />
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className="input-group">
              <MessageOutlinedIcon className="icon" />
              <input type="text" placeholder="Message" />
            </div>
            <button type="submit" className="btn">
              Send <SendOutlinedIcon className="iconBtn" />
            </button>
          </form>
          <div className="contactTouch">
            <div className="contactContainer">
              <h1 data-aos="fade-up">Contact Us</h1>

              <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe ab, quo harum quidem ullam corporis possimus molestias itaque culpa cumque provident consectetur accusantium alias.</p>
            </div>
            <div className="touch" data-aos="fade-right">
              <AccessTimeFilledIcon className="socials" />
              <div className="times">
                <h3>Opening Hour</h3>
                <p>Friday - Saturday</p>
                <p>09 AM - 05 PM</p>
              </div>
            </div>
            <div className="touch" data-aos="fade-left">
              <LocalPhoneIcon className="socials" />
              <div className="times">
                <h3>Call Us Now</h3>
                <p>Telephone : 021-830-6633</p>
                <p>Fax. 021-8370-8874</p>
              </div>
            </div>
            <div className="touch" data-aos="fade-right">
              <EmailIcon className="socials" />
              <div className="times">
                <h3>Email Us</h3>
                <p>sales@remala.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
