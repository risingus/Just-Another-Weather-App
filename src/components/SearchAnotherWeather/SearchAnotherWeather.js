import { TestButton } from "../TestButton/TestButton";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import { InputBox, IsEmptyMessage, StyledForm, StyledSearch } from "./styles";



export function SearchAnotherWeather({ handleSearchLocation }) {
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function handleSearch(e) {
    e.preventDefault()
    if (search === '') return setIsEmpty(true)
    setIsEmpty(false)
    handleSearchLocation(e, search)
  }

  function onChangeSearch(value){
    if (value !== '' && isEmpty) {
      setIsEmpty(false)
    }
    setSearch(value)
  }

  return (
    <StyledForm onSubmit={(e) => handleSearch(e)}>
      <InputBox>
        <StyledSearch type="text" placeholder="Try Fortaleza,br" onChange={(e) => onChangeSearch(e.target.value)} value={search} />
        {
          isEmpty && <IsEmptyMessage>Is Required</IsEmptyMessage>
        }
      </InputBox>
      

      <TestButton $size="small" onClick={(e) => handleSearch(e)} >
        <SearchIcon />
      </TestButton>
    </StyledForm>
  );
}

SearchAnotherWeather.propTypes = {
  handleSearchLocation: PropTypes.func.isRequired,
};