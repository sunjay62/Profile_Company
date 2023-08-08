// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./business.css";
// import Building from "../../assets/building.jpg";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";

// const Business = () => {
//   // INI AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Durasi animasi (dalam milidetik)
//       easing: "ease-in-out", // Gaya animasi
//       once: true, // Animasi hanya terjadi sekali saat digulir
//     });
//   }, []);

//   return (
//     <div className="businessContainer">
//       <div
//         className="topBusinessContainer"
//         data-aos="fade-down"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="1500"
//       >
//         <h1>Our Company</h1>
//       </div>

//       <div className="bottomBusinessContainer">
//         <div
//           className="cardContainer"
//           data-aos="fade-right"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="1500"
//         >
//           <div className="cardTop">
//             <img src={Building} alt="PT. " />
//           </div>
//           <h3>PT. Remala Abadi</h3>
//           <hr />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
//             ullam quae sit dolores at expedita voluptatum error distinctio,
//             magni inventore?
//           </p>
//           <hr />
//           <Button
//             className="btnRead"
//             variant="contained"
//             endIcon={<SendIcon />}
//           >
//             Read More
//           </Button>
//         </div>
//         <div
//           className="cardContainer"
//           data-aos="fade-up"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="1500"
//         >
//           <div className="cardTop">
//             <img src={Building} alt="PT. " />
//           </div>
//           <h3>PT. Fibermedia Indonesia</h3>
//           <hr />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
//             ullam quae sit dolores at expedita voluptatum error distinctio,
//             magni inventore?
//           </p>
//           <hr />
//           <Button
//             className="btnRead"
//             variant="contained"
//             endIcon={<SendIcon />}
//           >
//             Read More
//           </Button>
//         </div>
//         <div
//           className="cardContainer"
//           data-aos="fade-left"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="1500"
//         >
//           <div className="cardTop">
//             <img src={Building} alt="PT. " />
//           </div>
//           <h3>PT. PC24 Cyber</h3>
//           <hr />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
//             ullam quae sit dolores at expedita voluptatum error distinctio,
//             magni inventore?
//           </p>
//           <hr />
//           <Button
//             className="btnRead"
//             variant="contained"
//             endIcon={<SendIcon />}
//           >
//             Read More
//           </Button>
//         </div>
//         <div
//           className="cardContainer"
//           data-aos="fade-up"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="1500"
//         >
//           <div className="cardTop">
//             <img src={Building} alt="PT. " />
//           </div>
//           <h3>PT. Accelworks</h3>
//           <hr />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
//             ullam quae sit dolores at expedita voluptatum error distinctio,
//             magni inventore?
//           </p>
//           <hr />
//           <Button variant="contained" endIcon={<SendIcon />}>
//             Read More
//           </Button>
//         </div>
//         <div
//           className="cardContainer"
//           data-aos="fade-up"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="1500"
//         >
//           <div className="cardTop">
//             <img src={Building} alt="PT. " />
//           </div>
//           <h3>PT. Saas Studio</h3>
//           <hr />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
//             ullam quae sit dolores at expedita voluptatum error distinctio,
//             magni inventore?
//           </p>
//           <hr />
//           <Button
//             className="btnRead"
//             variant="contained"
//             endIcon={<SendIcon />}
//           >
//             Read More
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Business;
