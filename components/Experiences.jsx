import React from 'react';
import '../assets/css/Experiences.css';

const Experiences = () => (
  <div className="experiences">
    <h2> CAREERS </h2>
    <div className="work-experience">
      <div className="careers">
        <div className="org-info">
          <a className="org-name" href="https://www.cerner.com/"> Cerner Corporation </a>
          <div className="work-title">
            <img src="assets/experiences/avatar-color.svg" alt="avatar" width="20" height="20" />
            <div> Associate Senior Software Engineer </div>
          </div>
          <div className="work-timeline">
            <img src="assets/experiences/calendar-color.svg" alt="calendar" width="20" height="18" />
            <div> July 2015 - Present </div>
          </div>
          <div className="work-location">
            <img src="assets/experiences/location-color.svg" alt="location" width="20" height="18" />
            <div> Kansas City, Missouri </div>
          </div>
        </div>
        <div className="work-description">
          Designed and Developed reusable web views using React.js, Redux, JQuery, HTML, CSS and
          Ruby on Rails for the Powerchart Touch Application. Powerchart Touch is
          a web/ iOS mobile application that provides the physician community on-the-go access to
          patient conditions history, lab results, schedule and demographics details.
          As an integral part of the agile team, worked in various capacities in designing and
          developing patient demographics, conditions history, physician schedule components.
          Also responsible for release and deployment of application with its various components.
        </div>
      </div>
      <div className="careers">
        <div className="org-info">
          <a className="org-name" href="https://www.earlywarning.com/"> Early Warning Services </a>
          <div className="work-title">
            <img src="assets/experiences/avatar-color.svg" alt="avatar" width="20" height="20" />
            <div> Software Engineering Intern </div>
          </div>
          <div className="work-timeline">
            <img src="assets/experiences/calendar-color.svg" alt="calendar" width="20" height="18" />
            <div> July 2014 - May 2015 </div>
          </div>
          <div className="work-location">
            <img src="assets/experiences/location-color.svg" alt="location" width="20" height="18" />
            <div> Scottsdale, Arizona </div>
          </div>
        </div>
        <div className="work-description">
          Developed a component using CloverETL and Java for de-duping (removing duplicate)
          input files containing customer records. The de-duped files were then used in
          Identity Chek Service Alerts solution. It is a solution used by Identity Protection
          providers to generate alerts to notify subscribers of questionable activity
          occurring within their deposit accounts.
        </div>
      </div>
    </div>
    <h2> EDUCATION </h2>
    <div className="educational-experience">
      <div className="colleges">
        <div className="college-info">
          <a className="college-name" href="https://www.asu.edu/"> Arizona State University </a>
          <div className="degree-title">
            <img src="assets/experiences/grad-cap.svg" alt="grad-cap" width="20" height="20" />
            <div> Master of Science </div>
          </div>
          <div className="degree-timeline">
            <img src="assets/experiences/calendar-color.svg" alt="calendar" width="20" height="18" />
            <div> August 2013  - May 2015 </div>
          </div>
          <div className="college-location">
            <img src="assets/experiences/location-color.svg" alt="location" width="20" height="18" />
            <div> Tempe, Arizona </div>
          </div>
        </div>
        <div className="college-description">
          Graduated my Masters in Computer Science from Arizona State University.
          The coursework focused on Software Engineering with most courses on design, security and
          cloud applications. Project work includes Secure Banking System, Recommendation
          engine for web based services, Tip Calculator Application and Hotel Menu Ordering system.
        </div>
      </div>
      <div className="colleges">
        <div className="college-info">
          <a className="college-name" href="https://www.annauniv.edu/"> Anna University </a>
          <div className="degree-title">
            <img src="assets/experiences/grad-cap.svg" alt="grad-cap" width="20" height="20" />
            <div> Bachelor of Engineering </div>
          </div>
          <div className="degree-timeline">
            <img src="assets/experiences/calendar-color.svg" alt="calendar" width="20" height="18" />
            <div> September 2009 - May 2013 </div>
          </div>
          <div className="college-location">
            <img src="assets/experiences/location-color.svg" alt="location" width="20" height="18" />
            <div> Chennai, India </div>
          </div>
        </div>
        <div className="college-description">
          Completed my Bachelors in Computer Science and Engineering from Anna University.
          Being computer science major program, helped me learn Data Structures, Algorithms,
          Object Oriented Programming and various other fundamentals. Notable projects include
          Inventory Management and Ordering system and Mobile finger print authentication
          for an Internet banking application.
        </div>
      </div>
    </div>
  </div>
);

export default Experiences;
