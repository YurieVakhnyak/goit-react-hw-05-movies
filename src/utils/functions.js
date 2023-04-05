export function voteToPersent(vote) {
  if (vote) {
    const persentVote = Math.floor(vote * 10);
    return `${persentVote}%`;
  }
  return 'no data';
}

export function formateDate(date) {
  if (date) {
    const newDate = new Date(date);
    const formattedDate = newDate.toUTCString().slice(5, 16);
    return formattedDate;
  }
  return 'no data';
}

export function sortByField(arr, field, order = 'desc') {
  const direction = order === 'asc' ? 1 : -1;
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
  return order === 'asc' ? 'desc' : 'asc';
}
