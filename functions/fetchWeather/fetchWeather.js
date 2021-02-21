/** Import */
const axios = require('axios');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  /** Get parameters */
  const { latitude, longitude } = event.queryStringParameters;
  /** Get secret api key */
  const { REACT_APP_API_OPENWEATHERMAP_KEY } = process.env;
  /** Set endpoint for axios request */
  const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lang=fr&lat=${latitude}&lon=${longitude}&units=metric&appid=${REACT_APP_API_OPENWEATHERMAP_KEY}`;

  /** Launch request */
  try {
    const { data } = await axios.get(openWeatherMapApiUrl);
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
