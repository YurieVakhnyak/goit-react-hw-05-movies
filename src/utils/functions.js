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
    case 'Rating':
      const withoutLowVotes = makeWithoutLowVotes(cast);

      sortedFilmography = sortByField(withoutLowVotes, 'vote_average', order);

      break;
    case 'Date':
      sortedFilmography = sortByField(cast, 'release_date', order);
      break;
    case 'Title':
      sortedFilmography = sortByField(cast, 'title', order);

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
