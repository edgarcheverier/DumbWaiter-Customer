//TODO move the backendUrl to .env or similar
const backendUrl = 'http://192.168.1.218:2017';
const fetchService = (
  url,
  method,
  data,
  callback,
  error
) => {
  if (method == 'POST') {
    fetch(`${backendUrl}/${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        callback(response);
      })
      .catch(err => {
        error(err);
      });
  }
};
module.exports = fetchService;
