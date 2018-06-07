import {
  GET_WEATHER_INFORMATION,
  GET_WEATHER_INFORMATION_SUCCESSFUL,
  GET_WEATHER_INFORMATION_FAILED,
} from '../actions/weather-info';

const getWeatherInformationReducer = (state = {
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_WEATHER_INFORMATION:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;
    case GET_WEATHER_INFORMATION_SUCCESSFUL:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.weatherResponse = action.data.response;
      return newState;
    case GET_WEATHER_INFORMATION_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      newState.weatherResponse = action.data.response;
      return newState;
    default:
      return state;
  }
};

export default getWeatherInformationReducer;
