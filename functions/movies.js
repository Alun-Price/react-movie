import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const api_key = "6cb58f5c37660b569aaa773b2dabc325";
  const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${api_key}&language=en-US&page=1`;
  console.log("KEY: ".api_key);
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
