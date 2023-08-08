import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Map from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img src={Logo} alt="" />

          <div className="socials">
            <a
              href="https://www.instagram.com/tachyon.net.id_/?hl=id"
              target="_blank"
            >
              <InstagramIcon className="icon" />
            </a>
            <a
              href="https://www.facebook.com/tachyon.net.id/?locale=id_ID"
              target="_blank"
            >
              <FacebookOutlinedIcon className="icon" />
            </a>
            <a href="https://twitter.com/tachyonnetwork" target="_blank">
              <TwitterIcon className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/pt-remala-abadi/mycompany/"
              target="_blank"
            >
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
        <ul className="footer-right">
          <li>
            <h2>PRODUCT</h2>

            <ul className="box">
              <li>
                <a href="#" className="href">
                  Internet Dedicated
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Internet Broadband
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Internet Wireless
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Internet Home
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Manage Service
                </a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>INFORMATION</h2>

            <ul className="box">
              <li>
                <a href="#" className="href">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="href">
                  Sales
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>PT. REMALA ABADI</h2>

            <ul className="box">
              <li>
                <a href="https://goo.gl/maps/hKKbEz4E6YxVdQUC6" target="_blank">
                  <Map className="icon" /> : Graha Mustika Ratu
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/hKKbEz4E6YxVdQUC6" target="_blank">
                  Jl Gatot Subroto No.74-75 Lantai 10, DKI Jakarta 12870
                </a>
              </li>
              <li>
                <a>
                  <PhoneIcon className="icon" /> : (021) 83709269
                </a>
              </li>
              <li>
                <a>
                  <EmailIcon className="icon" /> : noc@tachyon.net.id
                </a>
              </li>
              <li>
                <h2>Visit Our Office :</h2>
              </li>
              <li>
                <a>Monday – Saturday</a>
              </li>
              <li>
                <a>
                  <a>09 AM – 05 PM</a>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <br />
        <div className="footer-bottom">
          <p>Copyright &copy; PT. Remala Abadi 2023 All Right Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
