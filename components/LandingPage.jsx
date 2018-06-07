import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/LandingPage.css';

const propTypes = {
  closeOverlay: PropTypes.func,
};

function hideOverlay(closeOverlay) {
  document.getElementsByClassName('landing-page')[0].classList.add('close-overlay');
  setTimeout(closeOverlay, 4000);
}

const LandingPage = (props) => {
  const { closeOverlay } = props;
  return (
    <div className="landing-page" onClick={() => { hideOverlay(closeOverlay); }}>
      <span className="landing-profile landing-profile-name"> Sri Venkatesh Sankaran </span>
      <span className="landing-profile landing-profile-tags"> Software Engineer | Front End Enthusiast | Amatuer Sketchperson | Animation Moviebuff </span>
    </div>
  );
};

LandingPage.propTypes = propTypes;
export default LandingPage;
