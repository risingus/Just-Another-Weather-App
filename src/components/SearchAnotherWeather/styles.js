import styled from "styled-components";


export const StyledSearch = styled.input`
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

export const StyledForm = styled.form`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

export const IsEmptyMessage = styled.span`
  color: red;
  font-size: .7rem;
  margin-top: .2rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;