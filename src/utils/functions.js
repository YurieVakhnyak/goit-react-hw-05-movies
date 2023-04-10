export function voteToPersent(vote) {
  if (vote) {
    const persentVote = Math.floor(vote * 10);
    return `${persentVote}%`;
  }
  return '--%';
}

export function formateDate(date) {
  if (date) {
    const newDate = new Date(date);
    const formattedDate = newDate.toUTCString().slice(5, 16);
    return formattedDate;
  }
  return 'no data';
}

export function sortByField(arr, field, order = false) {
  const direction = order ? 1 : -1;
  return arr.sort((a, b) => {
    if (a[field] < b[field]) {
      return -1 * direction;
    }
    if (a[field] > b[field]) {
      return 1 * direction;
    }
    return 0;
  });
}

export function makeNewArray(arr) {
  const newArr = arr.map(item => {
    if (item !== null) {
      return { ...item };
    } else {
      return item;
    }
  });
  return newArr;
}

export function makeWithoutLowVotes(arr) {
  const newArr = arr.map(item => {
    if (item.vote_count < 10) {
      return { ...item, vote_average: 0 };
    } else {
      return item;
    }
  });
  return newArr;
}

export function toggleOrder(order) {
  return !order;
}

export const getSortedFilmography = (fieldSorted, list, order) => {
  let sortedFilmography;

  switch (fieldSorted) {
    case 'Trends':
      sortedFilmography = list;
      break;
    case 'Rating':
      const withoutLowVotes = makeWithoutLowVotes(list);
      sortedFilmography = sortByField(withoutLowVotes, 'vote_average', order);
      break;
    case 'Date':
      const newArrayByDate = makeNewArray(list);
      sortedFilmography = sortByField(newArrayByDate, 'release_date', order);
      break;
    case 'AirDate':
      const newArrayByAirDate = makeNewArray(list);
      sortedFilmography = sortByField(
        newArrayByAirDate,
        'first_air_date',
        order
      );
      break;
    case 'Title':
      const newArrayByTitle = makeNewArray(list);
      sortedFilmography = sortByField(newArrayByTitle, 'title', order);
      break;
    case 'Name':
      const newArrayByName = makeNewArray(list);
      sortedFilmography = sortByField(newArrayByName, 'name', order);
      break;

    default:
      sortedFilmography = list;
  }

  return sortedFilmography;
};

export function removeDuplicates(arr) {
  const uniqueArr = [];

  arr.forEach(({ author, content }) => {
    if (
      !uniqueArr.find(
        item => item.author === author && item.content === content
      )
    ) {
      uniqueArr.push({ author, content });
    }
  });

  return uniqueArr;
}

export const getTrendingTitle = (period, type) => {
  let mediaType;

  switch (type) {
    case 'tv':
      mediaType = 'TV Shows';
      break;
    case 'movie':
      mediaType = 'Movies';
      break;
    case 'person':
      mediaType = 'People';
      break;
    default:
      mediaType = 'Movies';
  }

  const timePeriod = period === 'week' ? 'week' : 'today';
  return `${mediaType} trending ${timePeriod}`;
};
