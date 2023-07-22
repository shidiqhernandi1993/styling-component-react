import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

function StylingComponent() {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <About />
      </main>
    </>
  );
}

export default StylingComponent;
