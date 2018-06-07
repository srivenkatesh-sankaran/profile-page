import {
  GET_IP_INFORMATION_SUCCESSFUL,
  GET_IP_INFORMATION_FAILED,
} from '../actions/ip-info';

const getIPInformationReducer = (state = {
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_IP_INFORMATION_SUCCESSFUL:
      newState.IPResponse = action.data.response;
      return newState;
    case GET_IP_INFORMATION_FAILED:
      newState.IPResponse = action.data.response;
      return newState;
    default:
      return state;
  }
};

export default getIPInformationReducer;
