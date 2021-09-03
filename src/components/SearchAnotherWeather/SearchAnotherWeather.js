import { TestButton } from "../TestButton/TestButton";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearch = styled.input`
  
  height: 2.1rem;
  margin-right: 3px;
  background: ${({ theme }) => theme.background_primary_color};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-color: ${({ theme }) => theme.input_border};

  color: ${({ theme }) => theme.button_primary_color};

  &::placeholder {
    color: ${({ theme }) => theme.input_placeholder_color};
  }

  :focus {
    outline: none !important;
  }
`;

const StyledForm = styled.form`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const IsEmptyMessage = styled.span`
  color: red;
  font-size: .7rem;
  margin-top: .2rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

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