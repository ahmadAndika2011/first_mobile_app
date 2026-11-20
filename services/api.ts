const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

const fetchPopularMovie = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?sort_by=${query}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie/sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  const data = await response.json();
  return data.results;
};

export { TMDB_CONFIG, fetchPopularMovie };

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY3NWJjZTUzNzQ1NzlkNDg5ZGI1NzY1YjVmYjc3MiIsIm5iZiI6MTc5NTE1OTM2My41MzksInN1YiI6IjZhZmZmNTQzYjE0MTQ5YThjZmViMzYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tweUv2Ocxj6kYZ041WUQmFNdnngGWYuy2ew10gyc4eE'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
