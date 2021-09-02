import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledDiv = styled.div`
display: flex;
justify-content: center;
gap: 5rem;
box-sizing: border-box;
margin: 0 0 3rem 0;


@media (max-width: 530px) {
    margin: 0 1rem 3rem 1rem;
  }
`;

const ContainerChildren = styled.div`
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  

  @media (max-width: 530px) {
      gap: 1rem;
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


