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
