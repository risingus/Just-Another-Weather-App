import { TestButton } from "../TestButton/TestButton";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

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
    border-bottom-color: ${({ theme }) => theme.input_border_focus};
  }
`;

const StyledForm = styled.form`
  margin-bottom: 2rem;
`;

export function SearchAnotherWeather({ handleSearchLocation }) {
  const [search, setSearch] = useState("");
  return (
    <StyledForm onSubmit={(e) => handleSearchLocation(e, search)}>
      <StyledSearch type="text" placeholder="Try Fortaleza,br" onChange={(e) => setSearch(e.target.value)} value={search} />

      <TestButton $size="small" onClick={(e) => handleSearchLocation(e, search)}>
        <SearchIcon />
      </TestButton>
    </StyledForm>
  );
}
