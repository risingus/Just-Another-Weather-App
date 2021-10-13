import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem 2rem 1rem;
  width: 30rem;

  @media (max-width: 490px) {
    width: 95vw;
  }

`;

export const StyledImg = styled.img`
  width: 30rem;
  border-radius: 0.4rem;
  
  @media (max-width: 490px) {
    width: 95vw;
  }
`;

export const StyledCity = styled.h1`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 1rem;
  position: absolute;
  font-size: 2.5rem;
  text-shadow: 3px 3px 0px black;
`;

export const StyledTemp = styled.h1`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 7rem;
  position: absolute;
  font-size: 5rem;
  text-shadow: 3px 3px 0px black;
`;

export const StyledClimate = styled.p`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 14rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

export const StyledDay = styled.p`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 5rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

export const StyledDaysBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background_primary_color};
  width: 100%;
  margin-top: -5rem;
  height: 7rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${({ theme }) => theme.button_primary_color};
  border: ${({ theme }) => theme.grouper_border};

  @media (max-width: 490px) {
    width: 95vw;
    div:nth-child(7) {
     display: none;
    }

    div:nth-child(6) {
     display: none;
    }
  }

  @media (max-width: 356px) {
    div:nth-child(5) {
     display: none;
    }
  }

  div:nth-child(odd) {
    background: ${({ theme }) => theme.week_temp_background_color};
  }

  div {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    gap: 0.5rem;

    span {
      text-align: center;
      width: min-content;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
`;