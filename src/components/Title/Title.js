import styled from 'styled-components';
import PropTypes from "prop-types";


const StyledH1 = styled.h1`
  color: ${({theme }) => theme.title_text_color };
  text-shadow: ${({theme }) => theme.title_text_shadow};
  letter-spacing: .2rem;
`; 



export function Title({children}) {

  return (
    <StyledH1>{children}</StyledH1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};