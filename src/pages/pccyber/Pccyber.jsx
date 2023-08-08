import React from "react";
import Navhome from "../../components/navhome/Navhome";
import Hero from "../../components/hero/Hero";
import "./pccyber.css";
import Footer from "../../components/footer/Footer";
import Example from "../../components/content/Example";

const Pccyber = () => {
  return (
    <div className="pccyber">
      <Navhome />
      <section id="pccyber">
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          title="PT. PC24 Cyber"
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

export default Pccyber;
