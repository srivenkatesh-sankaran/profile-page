import React from 'react';
import '../assets/css/NavBar.css';

import Experiences from './Experiences';
import LandingPage from './LandingPage';
import Profile from './Profile';
import Resume from './Resume';
import StickyNotesContainer from './StickyNotesContainer';
import TechStack from './TechStack';
import WeatherWidget from './WeatherPill';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.changeMenu = this.changeMenu.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);

    this.state = {
      currentMenuItem: 'PROFILE',
      showLandingPage: true,
    };
  }

  changeMenu(event, currentItem) {
    this.setState({ currentMenuItem: currentItem });

    const items = document.querySelectorAll('.navbar a');
    [].forEach.call(items, (item) => {
      item.classList.remove('active-navbar-item');
    });

    event.target.classList.add('active-navbar-item');
  }

  closeOverlay() {
    this.setState({ showLandingPage: false });
  }

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
          <li><a href="#" className="active-navbar-item" onClick={event => this.changeMenu(event, 'PROFILE')}> PROFILE </a></li>
          <li><a href="#" onClick={event => this.changeMenu(event, 'SKILLS')}> SKILLS </a></li>
          <li><a href="#" onClick={event => this.changeMenu(event, 'EXPERIENCES')}> EXPERIENCES </a></li>
          <li><a href="#" onClick={event => this.changeMenu(event, 'RESUME')}> RESUME </a></li>
          <li><a href="#" onClick={event => this.changeMenu(event, 'CONTACT')}> CONTACT </a></li>
          <li className="weather-list-item">
            <WeatherWidget />
          </li>
        </ul>
        <div className="scroll-content">
          { this.state.showLandingPage &&
          <LandingPage closeOverlay={this.closeOverlay} />
          }
          { this.state.currentMenuItem === 'PROFILE' &&
          <Profile />
          }
          { this.state.currentMenuItem === 'SKILLS' &&
          <TechStack />
          }
          { this.state.currentMenuItem === 'EXPERIENCES' &&
          <Experiences />
          }
          { this.state.currentMenuItem === 'RESUME' &&
          <Resume />
          }
          { this.state.currentMenuItem === 'CONTACT' &&
          <StickyNotesContainer />
          }
        </div>
      </div>
    );
  }
}

export default NavBarComponent;
