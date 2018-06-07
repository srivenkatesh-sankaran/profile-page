import 'whatwg-fetch';
import { getIPInformationSuccessful, getIPInformationFailure } from '../actions/ip-info';

export default function getIPInformation(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          dispatch(getIPInformationFailure(undefined));
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((json) => {
        dispatch(getIPInformationSuccessful(JSON.parse(json)));
      })
      .catch(() => dispatch(getIPInformationFailure(undefined)));
  };
}
