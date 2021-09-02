import styled from 'styled-components';
import PropTypes from "prop-types";


const StyledH1 = styled.h1`
  letter-spacing: .2rem;
  font-size: 5rem;
  line-height: 6rem;
  text-align: center;
  width: min-content;
  text-transform: uppercase;
  background: ${({theme }) => theme.title_clip_background };
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`; 



export function Title({children}) {

  return (
    <StyledH1>{children}</StyledH1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};