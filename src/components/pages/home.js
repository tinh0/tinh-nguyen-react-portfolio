import React from 'react';

import PortfolioContainer from "../portfolio/portfolio-container";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import Certifications from './certifications';
import Skills from './skills';

export default function () {
  return (
    <div>
      <About />
      <Skills />
      <PortfolioContainer />
      <Certifications />
      <Contact />
    </div>
  );
}