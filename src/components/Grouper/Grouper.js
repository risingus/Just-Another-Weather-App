import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 40rem;
margin-right: auto;
margin-left: auto;
margin-top: 3rem;
margin-bottom: 5rem;
background: ${({theme }) => theme.background_secondary_color};
padding: 2rem 5rem;
border-radius: .8rem;
box-shadow: ${({theme }) => theme.grouper_box_shadow};
border: ${({theme }) => theme.grouper_border};
`;


export function Grouper({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}



Grouper.propTypes = {
  children: PropTypes.node.isRequired,
};


