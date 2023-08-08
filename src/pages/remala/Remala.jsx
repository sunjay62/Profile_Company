import React from "react";
import Navhome from "../../components/navhome/Navhome";
import Hero from "../../components/hero/Hero";
import "./remala.css";
import Footer from "../../components/footer/Footer";
import Example from "../../components/content/Example";

const Remala = () => {
  return (
    <div className="remala">
      <Navhome />
      <section id="remala">
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1613275300153-173113b871d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          title="PT. Remala Abadi"
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

export default Remala;
