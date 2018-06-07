import 'whatwg-fetch';
import { getWeatherInformation, getWeatherInformationSuccessful, getWeatherInformationFailure } from '../actions/weather-info';

export default function getWeatherDetails(url) {
  return (dispatch) => {
    dispatch(getWeatherInformation());
    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
      .then((response) => {
        if (!response.ok) {
          dispatch(getWeatherInformationFailure(undefined));
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((json) => {
        dispatch(getWeatherInformationSuccessful(JSON.parse(json)));
      })
      .catch(() => dispatch(getWeatherInformationFailure(undefined)));
  };
}
