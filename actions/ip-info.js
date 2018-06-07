export const GET_IP_INFORMATION = 'GET_IP_INFORMATION';
export const GET_IP_INFORMATION_SUCCESSFUL = 'GET_IP_INFORMATION_SUCCESSFUL';
export const GET_IP_INFORMATION_FAILED = 'GET_IP_INFORMATION_FAILED';

export function getIPInformationSuccessful(response) {
  return {
    type: GET_IP_INFORMATION_SUCCESSFUL,
    data: {
      response,
    },
  };
}

export function getIPInformationFailure(response) {
  return {
    type: GET_IP_INFORMATION_FAILED,
    data: {
      response,
    },
  };
}
