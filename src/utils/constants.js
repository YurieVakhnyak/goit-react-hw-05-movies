// export const API_KEY = 'b30750fbe582936755a0930282f9befd';
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const searchParams = new URLSearchParams({
  api_key: API_KEY,
});

export const basicURL = 'https://api.themoviedb.org/3';

export const basicBigImageURL = 'https://image.tmdb.org/t/p/w500';

export const basicSmallImageURL = 'https://image.tmdb.org/t/p/w200';
