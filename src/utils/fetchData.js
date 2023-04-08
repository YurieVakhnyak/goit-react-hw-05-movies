import {
  searchParams,
  basicURL,
  basicSmallImageURL,
  basicBigImageURL,
} from './constants';
import hasNotPhotoPerson from '../images/NoPhotoPerson.png';

export function fetchData(url, setData, setError) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong....'));
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setError(error);
    });
}

export function fetchImage(imageUrl, setHoveredImageUrl) {
  const fetchUrl = basicSmallImageURL + imageUrl;

  fetch(fetchUrl)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => setHoveredImageUrl(url))
    .catch(error => console.error(error));
}

export function getImageUrl(profilePath, small = false) {
  if (profilePath) {
    return small
      ? basicSmallImageURL + profilePath
      : basicBigImageURL + profilePath;
  } else {
    return hasNotPhotoPerson;
  }
}

export function getExtraInfoUrl(id, type, dataType) {
  const mediaType = type === 'tv' ? 'tv' : 'movie';
  const dataAltType = dataType === 'cast' ? 'credits' : 'reviews';
  const URL = `${basicURL}/${mediaType}/${id}/${dataAltType}?${searchParams}`;
  return URL;
}
export function getTrendsUrl(type, period) {
  const mediaType = type === 'tv' ? 'tv' : 'movie';
  const URL = `${basicURL}/trending/${mediaType}/${period}?${searchParams}`;
  return URL;
}
