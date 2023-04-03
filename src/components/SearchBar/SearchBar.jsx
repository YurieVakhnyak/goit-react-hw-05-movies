import { FormStyled, SearchText, InputStyled } from './SearchBar.styled';

export const SearchBar = ({ value, onSearch }) => {
  return (
    <FormStyled>
      <SearchText>Search movie</SearchText>
      <InputStyled
        type="text"
        placeholder="Enter movie name"
        defaultValue={value}
        onChange={evt => onSearch(evt.target.value)}
      />
    </FormStyled>
  );
};
