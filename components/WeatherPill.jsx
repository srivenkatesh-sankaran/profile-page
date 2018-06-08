import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getIPInformation from '../thunks/ip-info';
import getWeatherDetails from '../thunks/weather-info';
import '../assets/css/WeatherPill.css';

const propTypes = {
  fetchIPInformation: PropTypes.func,
  fetchWeatherInformation: PropTypes.func,
  IPResponse: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  isFailed: PropTypes.bool,
  isLoading: PropTypes.bool,
  weatherResponse: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const weatherCard = (
  city, country, dateText, mainIconSource, humidity, precipitation, summary, temperatureText,
  temperatureLow, temperatureHigh, temperatureScale, windSpeed,
) => {
  const tempRangeStyle = {
    width: `${(temperatureHigh - temperatureLow) + 20}%`,
  };

  return (
    <div>
      <h2> {city} </h2>
      <h3> {country} </h3>
      <h4> { dateText } </h4>
      <div>
        <div className="popup-main-icon">
          { mainIconSource &&
            <img src={mainIconSource} alt="main-icon" height="125" width="125" />
          }
        </div>
        <div className="temperature">
          <span> {temperatureText} </span>
          <span> {summary} </span>
        </div>
      </div>
      <div className="temperature-range">
        <div className="temperature-low">{temperatureLow}&deg;{temperatureScale} Low</div>
        <div className="temperature-bar" style={tempRangeStyle} />
        <div className="temperature-high">{temperatureHigh}&deg;{temperatureScale} High</div>
      </div>
      <div className="weather-details">
        <div className="precipitation">
          <img src="assets/weather/precipitation.svg" alt="precipitation" height="35" width="35" />
          <span>{ precipitation }%</span>
        </div>
        <div className="wind">
          <img src="assets/weather/wind_speed.svg" alt="wind speed" height="35" width="35" />
          <span>{ windSpeed } { temperatureScale === 'C' ? 'mph' : 'kph' }</span>
        </div>
        <div className="humidity">
          <img src="assets/weather/humidity.svg" alt="humidity" height="35" width="35" />
          <span>{ humidity }%</span>
        </div>
      </div>
    </div>
  );
};

class WeatherPill extends React.Component {
  constructor(props) {
    super(props);

    this.currentDate = new Date();
    this.currentCardNumber = '0';
    this.currentIconSource = null;
    this.dayValues = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.monthValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.temperatureText = null;
    this.weatherURL = 'https://api.darksky.net/forecast/83509a1d56c58cf2699b04b5f8fded88/';

    this.constructDateTimeText = this.constructDateTimeText.bind(this);
    this.changeWeatherCard = this.changeWeatherCard.bind(this);
    this.getLocation = this.getLocation.bind(this);

    this.references = {
      firstFooter: null,
      secondFooter: null,
      thirdFooter: null,
      locationSlider: null,
    };

    this.state = {
      dateText: this.constructDateTimeText(this.currentCardNumber),
      mainIconSource: null,
      humidity: null,
      precipitation: null,
      summary: null,
      temperatureLow: null,
      temperatureHigh: null,
      temperatureScale: 'F',
      temperatureText: null,
      windSpeed: null,
    };
  }

  componentWillMount() {
    this.props.fetchIPInformation('https://ipinfo.io/geo');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weatherResponse) {
      if (nextProps.weatherResponse.currently && nextProps.weatherResponse.daily) {
        this.setState({
          dateText: this.constructDateTimeText(this.currentCardNumber, true),
        });
        this.changeWeatherCard(nextProps);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.IPResponse === undefined && this.props.IPResponse) {
      this.weatherURL += `${this.props.IPResponse.loc}`;
      this.props.fetchWeatherInformation(this.weatherURL);
    }

    if (prevState.temperatureScale !== this.state.temperatureScale) {
      if (this.state.temperatureScale === 'C') {
        this.weatherURL += '?units=si';
      } else {
        this.weatherURL = this.weatherURL.replace('?units=si', '');
      }
      this.props.fetchWeatherInformation(this.weatherURL);
    }

    if (prevProps.isLoading !== this.props.isLoading) {
      const spinner = document.querySelector('.popup .weather-overlay-container');
      if (spinner) {
        spinner.classList.toggle('no-display');
      }
    }
  }

  getLocation() {
    let fetchURL;
    const success = (position) => {
      if (Math.floor(this.props.weatherResponse.latitude) !==
          Math.floor(position.coords.latitude)) {
        if (Math.floor(this.props.weatherResponse.longitude) !==
            Math.floor(position.coords.longitude)) {
          fetchURL = `https://api.darksky.net/forecast/83509a1d56c58cf2699b04b5f8fded88/${position.coords.latitude},${position.coords.longitude}`;
          this.props.fetchWeatherInformation(fetchURL);
        }
      }
      this.references.locationSlider.disabled = true;
    };

    const failure = () => {
      this.references.locationSlider.checked = false;
      this.references.locationSlider.disabled = true;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  }

  changeTemperatureScale(event) {
    this.setState({ temperatureScale: event.target.dataset.scale });
    const scales = document.querySelectorAll('#temperature-scale div');
    [].forEach.call(scales, (scale) => {
      scale.classList.remove('active-scale');
    });
    event.target.classList.add('active-scale');
  }

  changeWeatherCard(props, event) {
    let {
      humidity, mainIconSource, precipitation, summary, temperatureLow,
      temperatureHigh, temperatureText, windSpeed,
    } = this.state;

    if (event) {
      this.currentCardNumber = event.currentTarget.dataset.date;
    }

    if (props.weatherResponse.daily) {
      temperatureLow = props.weatherResponse.daily.data &&
        props.weatherResponse.daily.data[this.currentCardNumber] &&
        Math.round(props.weatherResponse.daily.data[this.currentCardNumber].temperatureLow);
      temperatureHigh = props.weatherResponse.daily.data &&
        props.weatherResponse.daily.data[this.currentCardNumber] &&
        Math.round(props.weatherResponse.daily.data[this.currentCardNumber].temperatureHigh);
    }

    if (this.currentCardNumber === '0') {
      if (props.weatherResponse.currently) {
        mainIconSource = `assets/weather/${props.weatherResponse.currently.icon}.svg`;
        humidity = Math.round(props.weatherResponse.currently.humidity * 100);
        precipitation = Math.round(props.weatherResponse.currently.precipProbability * 100);
        summary = props.weatherResponse && props.weatherResponse.currently.summary;
        temperatureText = `${Math.round(props.weatherResponse.currently.apparentTemperature)}\xB0${this.state.temperatureScale}`;
        ({ windSpeed } = props.weatherResponse.currently);
      }
    } else if (props.weatherResponse.daily &&
              props.weatherResponse.daily.data[this.currentCardNumber]) {
      mainIconSource = `assets/weather/${props.weatherResponse.daily.data[this.currentCardNumber].icon}.svg`;
      humidity =
        Math.round(props.weatherResponse.daily.data[this.currentCardNumber].humidity * 100);
      precipitation =
        Math.round(props.weatherResponse.daily.data[this.currentCardNumber].precipProbability
          * 100);
      summary = props.weatherResponse &&
        props.weatherResponse.daily.data[this.currentCardNumber].summary;
      temperatureText = `${Math.round(props.weatherResponse.daily.data[this.currentCardNumber].temperatureHigh)}\xB0${this.state.temperatureScale}`;
      ({ windSpeed } = props.weatherResponse.daily.data[this.currentCardNumber]);
    }

    const footers = document.querySelectorAll('.popup-footer > div');
    [].forEach.call(footers, (footer) => {
      footer.classList.remove('popup-footer-selected');
    });
    footers[this.currentCardNumber].classList.add('popup-footer-selected');

    this.setState({
      dateText: this.constructDateTimeText(this.currentCardNumber),
      mainIconSource,
      humidity,
      precipitation,
      summary,
      temperatureLow,
      temperatureHigh,
      temperatureText,
      windSpeed,
    });
  }

  constructDateTimeText(dateValue, updateDateTime) {
    if (updateDateTime) {
      this.currentDate = new Date();
    }

    let hourValue = this.currentDate.getHours();
    let minuteValue = this.currentDate.getMinutes();
    this.currentDate.setDate(this.currentDate.getDate() + parseInt(dateValue, 10));
    const dayOfMonth = `${this.monthValues[this.currentDate.getMonth()]} ${this.currentDate.getDate()}`;
    this.currentDate.setDate(this.currentDate.getDate() - parseInt(dateValue, 10));

    hourValue = hourValue / 10 < 1 ? `0${hourValue}` : hourValue;
    minuteValue = minuteValue / 10 < 1 ? `0${minuteValue}` : minuteValue;

    if (parseInt(dateValue, 10) === 0) {
      return `${dayOfMonth}, ${hourValue}:${minuteValue}`;
    }

    return dayOfMonth;
  }

  render() {
    const nextDayIconSource = this.props.weatherResponse &&
                            this.props.weatherResponse.daily &&
                            this.props.weatherResponse.daily.data[1] &&
                            `assets/weather/${this.props.weatherResponse.daily.data[1].icon}.svg`;
    const dayAfterIconSource = this.props.weatherResponse &&
                            this.props.weatherResponse.daily &&
                            this.props.weatherResponse.daily.data[2] &&
                            `assets/weather/${this.props.weatherResponse.daily.data[2].icon}.svg`;
    const city = this.props.IPResponse && this.props.IPResponse.city;
    const country = this.props.IPResponse && this.props.IPResponse.country;
    const summary = this.props.weatherResponse && this.props.weatherResponse.currently.summary;
    const { temperatureLow, temperatureHigh, temperatureScale } = this.state;
    const weatherListItem = document.getElementsByClassName('weather-list-item')[0];

    if (!this.currentIconSource) {
      this.currentIconSource = this.state.mainIconSource;
    }

    if (!this.temperatureText) {
      this.temperatureText = this.state.temperatureText;
    }

    if (!this.props.IPResponse || (this.props.isFailed && !this.props.weatherResponse)) {
      if (weatherListItem) {
        weatherListItem.style.display = 'none';
      }
      return null;
    }

    return (
      <div className="weather-widget-container">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <div className="weather-pill-wrapper no-select">
            <div className="weather-pill">
              <img src={this.currentIconSource} alt="current-icon" height="48" width="48" />
              <div className="weather-pill-text">
                {city}&nbsp;
                {this.temperatureText}&nbsp;
                <span className="summary-text"> {summary} </span>
              </div>
              <i className="down" />
            </div>
          </div>
        </label>

        <div className="popup no-select">
          <div className="weather-overlay-container no-display">
            <span className="weather-overlay" />
          </div>
          { weatherCard(
              city, country, this.state.dateText, this.state.mainIconSource, this.state.humidity,
              this.state.precipitation, this.state.summary, this.state.temperatureText,
              temperatureLow, temperatureHigh, temperatureScale, this.state.windSpeed,
            )
          }
          <div className="popup-footer">
            <div className="popup-footer-selected" data-date="0" ref={(ref) => { this.references.firstFooter = ref; }} onClick={event => this.changeWeatherCard(this.props, event)}>
              <div>
                Now
              </div>
              <img src={this.currentIconSource} alt="current-icon" height="48" width="48" />
            </div>
            <div data-date="1" ref={(ref) => { this.references.secondFooter = ref; }} onClick={event => this.changeWeatherCard(this.props, event)}>
              <div>
                { this.dayValues[(this.currentDate.getDay() + 1) % 7] }
              </div>
              <img src={nextDayIconSource} alt="next-day-icon" height="48" width="48" />
            </div>
            <div data-date="2" ref={(ref) => { this.references.thirdFooter = ref; }} onClick={event => this.changeWeatherCard(this.props, event)}>
              <div>
                { this.dayValues[(this.currentDate.getDay() + 2) % 7] }
              </div>
              <img src={dayAfterIconSource} alt="day-after-icon" height="48" width="48" />
            </div>
          </div>
          <div className="location">
            <div className="location-text">Location</div>
            <label htmlFor="slider">
              <input id="slider" type="checkbox" ref={(ref) => { this.references.locationSlider = ref; }} onClick={this.getLocation} />
              <div className="toggle" />
            </label>
          </div>
          <div id="temperature-scale">
            <div className="celcius" data-scale="C" onClick={(event) => { this.changeTemperatureScale(event); }}>&deg;C</div>
            <div className="farenheit active-scale" data-scale="F" onClick={(event) => { this.changeTemperatureScale(event); }}>&deg;F</div>
          </div>
          <div className="refresh">
            Refresh
            <img onClick={() => { this.props.fetchWeatherInformation(this.weatherURL); }} onKeyPress={() => {}} src="assets/weather/refresh.svg" alt="refresh" height="18" width="18" />
          </div>
          <div className="darksky-api">
            <a href="https://darksky.net/dev/">Dark Sky API</a>
          </div>
        </div>
      </div>
    );
  }
}

WeatherPill.propTypes = propTypes;

const mapStateToProps = state => ({
  isFailed: state.WeatherReducers.isFailed,
  isLoading: state.WeatherReducers.isLoading,
  IPResponse: state.IPReducers.IPResponse,
  weatherResponse: state.WeatherReducers.weatherResponse,
});

const mapDispatchToProps = dispatch => ({
  fetchIPInformation: (url) => {
    dispatch(getIPInformation(url));
  },

  fetchWeatherInformation: (url) => {
    dispatch(getWeatherDetails(url));
  },
});

export { WeatherPill };

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPill);

