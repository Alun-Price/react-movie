import fetch from "node-fetch";
console.log("HERE");
export const handler = async () => {
  const api_key = process.env.VITE_MOVIES_API_KEY;
  console.log("KEY: ".api_key);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
  console.log("KEY2: ".api_key);
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
