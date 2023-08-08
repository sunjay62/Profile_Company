import React from "react";
import "./marquee.css";

const Marquee = () => {
  return (
    <div className="marqueeContainer">
      <marquee behavior="scroll" direction="left">
        <div className="marquee">
          <div className="marqueeItem">
            <h3>HEADER</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi!
            </p>
          </div>
          <div className="marqueeItem">
            <h3>HEADER</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi!
            </p>
          </div>
          <div className="marqueeItem">
            <h3>HEADER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi!
            </p>
          </div>
          <div className="marqueeItem">
            <h3>HEADER</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi!
            </p>
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
