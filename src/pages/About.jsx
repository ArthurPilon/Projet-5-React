import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <>
      <Header />
      <Banner>
        <img
          src="src/assets/images/Image source 2bannerabout.png"
          alt="Photo d'un paysage de montagne"
        />
      </Banner>
      <div>
        <Collapse>
          <div>
            <h3>Fiabilité</h3>
          </div>{" "}
        </Collapse>
      </div>
      <Footer />
    </>
  );
}
