export const GET_WEATHER_INFORMATION = 'GET_WEATHER_INFORMATION';
export const GET_WEATHER_INFORMATION_SUCCESSFUL = 'GET_WEATHER_INFORMATION_SUCCESSFUL';
export const GET_WEATHER_INFORMATION_FAILED = 'GET_WEATHER_INFORMATION_FAILED';

export function getWeatherInformation() {
  return {
    type: GET_WEATHER_INFORMATION,
  };
}

export function getWeatherInformationSuccessful(response) {
  return {
    type: GET_WEATHER_INFORMATION_SUCCESSFUL,
    data: {
      response,
    },
  };
}

export function getWeatherInformationFailure(response) {
  return {
    type: GET_WEATHER_INFORMATION_FAILED,
    data: {
      response,
    },
  };
}
