const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const api_key = process.env.MOVIES_API_KEY;
  const url = `https://api.themoviedb.org/3${event.queryStringParameters.path}?api_key=${api_key}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
