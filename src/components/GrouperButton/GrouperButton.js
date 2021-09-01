import styled from 'styled-components'
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 1rem;
`; 



export function GrouperButton({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )

}


GrouperButton.propTypes = {
  children: PropTypes.node.isRequired,
};