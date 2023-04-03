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
