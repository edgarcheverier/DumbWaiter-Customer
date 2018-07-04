const apiService = require('./api.service');

const verifyToken = async (token, callback) => {
  return await apiService(
    'validate',
    'POST',
    { token },
    callback,
    error => {
      console.log(error);
    }
  );
};

const authFacebook = async (authResponse, callback) => {
  return await apiService(
    'auth-facebook',
    'POST',
    authResponse,
    callback,
    error => {
      console.log(error);
    }
  );
};

export default {
  verifyToken,
  authFacebook,
};
