/** Import */
const axios = require('axios');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  /** Get parameters */
  const { latitude, longitude } = event.queryStringParameters;
  /** Get secret api key */
  const { REACT_APP_API_TIDES_KEY } = process.env;
  /** Set endpoint for axios request */
  const tidesUrl = `https://tides.p.rapidapi.com/tides?latitude=${latitude}&longitude=${longitude}&interval=60&duration=10080&radius=10`;

  /** Launch request */
  try {
    const { data } = await axios({
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      url: `${tidesUrl}`,
      headers: {
        'x-rapidapi-key': `${REACT_APP_API_TIDES_KEY}`,
        'x-rapidapi-host': 'tides.p.rapidapi.com',
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
