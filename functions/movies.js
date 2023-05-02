const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${api_key}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
