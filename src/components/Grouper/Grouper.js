import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledDiv = styled.div`
display: flex;
justify-content: center;
gap: 5rem;
box-sizing: border-box;
margin: 3rem 0 6rem 0;
padding: 2rem 0;


@media (max-width: 530px) {
    margin: 3rem 1rem 6rem 1rem;
  }
`;

const ContainerChildren = styled.div`
  box-shadow: ${({theme }) => theme.grouper_box_shadow};
  border: ${({theme }) => theme.grouper_border};
  background: ${({theme }) => theme.background_secondary_color};
  border-radius: .8rem;
  display: flex;
  gap: 2rem;
  padding: 2rem 5rem;

  @media (max-width: 530px) {
      gap: 1rem;
      padding: 1rem;
      flex-direction: column;
      text-align: center;
  }

`; 

export function Grouper({children}) {
  return (
    <StyledDiv>
      <ContainerChildren>
      {children}
      </ContainerChildren>
        
    </StyledDiv>
  )
}


Grouper.propTypes = {
  children: PropTypes.node.isRequired,
};


