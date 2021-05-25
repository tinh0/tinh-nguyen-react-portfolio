import React from 'react';

import PortfolioContainer from "../portfolio/portfolio-container";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import Certifications from './certifications';
import Skills from './skills';
import Header from './header';

export default function () {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <PortfolioContainer />
      <Certifications />
      <Contact />
    </div>
  );
}