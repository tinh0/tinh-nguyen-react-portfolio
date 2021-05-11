import React from 'react'

export default function Skills() {
  return (
    <div className="skills-container">
      <h1>My Skills and Current Projects(fix this later)</h1>
      <div className="three-column">
        <div>
          <h2>Have Experience In...</h2>
          <ul>
            <li>ES6 Javascript</li>
            <li>Java</li>
            <li>C#</li>
            <li>Python</li>
            <li>HTML and CSS</li>
          </ul>
        </div>
        <div>
          <h2>Currently Improving In...</h2>
          <ul>
            <li>ReactJS</li>
            <li>ASP.Net MVC 5</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h2>Currently Working On...</h2>
          <ul className="projects">
            <li>
              <h3>ClaimALead Sales CRM for Marquee IT</h3>
              <div>Using C# ASP.Net MVC, PHP, SQL, Azure</div>
            </li>
            <li>
              <h3>TODO App w/ James and Jackson</h3>
              <div>Using React, SCSS, and Firebase</div>
            </li>
            <li>
              <h3>SkillsUSA Nationals Web Design</h3>
              <div>HTML and CSS</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
