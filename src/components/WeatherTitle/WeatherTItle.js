import styled from 'styled-components';
import PropTypes from "prop-types";


const StyledH1 = styled.h1`
  letter-spacing: .2rem;
  color: ${({theme}) => theme.title_text_color};
  text-shadow: ${({theme}) => theme.title_text_shadow};
`; 



export function WeatherTitle({children}) {

  return (
    <StyledH1>{children}</StyledH1>
  )
}

WeatherTitle.propTypes = {
  children: PropTypes.node.isRequired,
};