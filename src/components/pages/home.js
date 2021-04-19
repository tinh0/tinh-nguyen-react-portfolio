import React from 'react';

import PortfolioContainer from "../portfolio/portfolio-container";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../pages/footer";

export default function () {
  return (
    <div>
      <About />
      <PortfolioContainer />
      <Contact />
      <Footer />
    </div>
  );
}