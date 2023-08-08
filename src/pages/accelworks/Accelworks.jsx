import React from "react";
import "./accelworks.css";
import Navhome from "../../components/navhome/Navhome";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Example from "../../components/content/Example";

const Accelworks = () => {
  return (
    <div className="accelworks">
      <Navhome />
      <section id="accelworks">
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          title="PT. Accelworks Indonesia"
          text="Let's Join to Partnership With us"
          buttonText="Contact Us"
          url="#contact"
          btnClass="show"
        />
      </section>
      <section className="example">
        <Example />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Accelworks;
