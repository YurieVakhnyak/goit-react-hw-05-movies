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

export const getSortedFilmography = (fieldSorted, cast, order) => {
  let sortedFilmography;

  switch (fieldSorted) {
    case 'Trends':
      sortedFilmography = cast;
      break;
    case 'Rating':
      const withoutLowVotes = makeWithoutLowVotes(cast);
      sortedFilmography = sortByField(withoutLowVotes, 'vote_average', order);
      break;
    case 'Date':
      const newArrayByDate = makeNewArray(cast);
      sortedFilmography = sortByField(newArrayByDate, 'release_date', order);
      break;
    case 'Title':
      const newArrayByTitle = makeNewArray(cast);
      sortedFilmography = sortByField(newArrayByTitle, 'title', order);
      break;

    default:
      sortedFilmography = cast;
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
  const mediaType = type === 'tv' ? 'TV Shows' : 'Movies';
  const timePeriod = period === 'week' ? 'week' : 'today';
  return `${mediaType} trending ${timePeriod}`;
};
