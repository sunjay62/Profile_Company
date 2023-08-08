import React from "react";
import Navhome from "../../components/navhome/Navhome";
import Hero from "../../components/hero/Hero";
import "./fibermedia.css";
import Footer from "../../components/footer/Footer";
import Example from "../../components/content/Example";

const Fibermedia = () => {
  return (
    <div className="fibermedia">
      <Navhome />
      <section id="fibermedia">
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          title="PT. Fibermedia Indonesia"
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

export default Fibermedia;
