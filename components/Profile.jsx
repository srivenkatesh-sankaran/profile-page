import React from 'react';
import '../assets/css/Profile.css';

const Profile = () => (
  <div className="profile">
    <img src="../../assets/collage.jpg" alt="collage" />
    <div className="profile-content">
      <h2> ABOUT ME </h2>
      <div className="company-location-info">
        <span> Current Location: </span>
        <span className="company-location-info-values"> Kansas City </span>
        <span> Current Company: </span>
        <span className="company-location-info-values"> Cerner Corporation </span>
      </div>

      <p>
        <span className="starting-letter">I</span> am a Software Engineer with keen interest and
        demonstrated experience with front end technologies.
        <img src="../../assets/profile.jpg" alt="profile" />
        &nbsp;I have worked on client facing products and services as part of my career and
        posess good knowledge with triaging, toubleshooting and
        fixing critical issues upto production environment.
        My technology stack includes React JS, Redux, Javascript, CSS, jQuery, Java and
        Ruby on Rails.
        Developing websites/ web applications has been my interest since sixth grade. It has been a
        good journey so far and looking forward to continue further on improving myself
        along the same lines.
      </p>
    </div>
  </div>
);

export default Profile;
