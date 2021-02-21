/** Import */
const axios = require('axios');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  /** Get parameters */
  const { latitude, longitude } = event.queryStringParameters;
  /** Get secret api key */
  const { REACT_APP_API_STORMGLASS_KEY } = process.env;
  /** Set endpoint for axios request */
  const dataToCollect = [
    'gust', 'windDirection', 'windSpeed',
    'waterTemperature', 'waveHeight',
  ].join(',');
  const source = 'sg';
  const openStormGlassApiUrl = `https://api.stormglass.io/v2/weather/point?source=${source}&lat=${latitude}&lng=${longitude}&params=${dataToCollect}`;

  /** Launch request */
  try {
    const { data } = await axios({
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      url: `${openStormGlassApiUrl}`,
      headers: {
        Authorization: `${REACT_APP_API_STORMGLASS_KEY}`,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
  catch (error) {
    const {
      status, statusText, headers, data,
    } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({
        status, statusText, headers, data,
      }),
    };
  }
};

module.exports = { handler };
