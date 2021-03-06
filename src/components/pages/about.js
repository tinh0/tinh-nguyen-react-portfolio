import React from 'react';
import ProfilePicture from '../../../static/assets/images/IMG_8254.jpg';
// import Resume from '../../../src/tinhnguyenresume.pdf';

export default function About() {
  return (
    <div
      className='homepage-wrapper'
      // style={{
      //   borderTop: 'solid 10px white'
      // }}
    >
      <div className='right-column'>
        <h1>About Me</h1>
        <div className='about-text'>
          Hello! I'm Tinh Nguyen and I'm a senior at Bingham High. I'm an
          aspiring software/web developer and I will be going to the University
          of Utah in computer science next year. <br /><br />I like to code, I know
          several languages and have made projects in all of them including
          HTML, CSS, JavaScript, Java, Python, and C#, and front-end frameworks
          such as Bootstrap and React. I'm constantly learning more about them
          and improving my skills. <br /><br />
          In my free time I like to play in the local chess tournaments, I'm
          currently the 2020 state co-champion and the 2021 high school
          champion.
        </div>
        <div className="button-wrapper">
          <button>Contact</button>
          <button>Resume</button>
        </div>
      </div>
      <div
        className='left-column'
        style={{
          background: 'url(' + ProfilePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      />
    </div>
  );
}
