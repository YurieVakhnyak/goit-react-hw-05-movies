export const SearchBar = ({ value, onSearch }) => {
  return (
    <form>
      <p>Search movie</p>
      <input
        type="text"
        defaultValue={value}
        onChange={evt => onSearch(evt.target.value)}
      />
    </form>
  );
};
