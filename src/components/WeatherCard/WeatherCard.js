import styled from "styled-components";
import day from "../../assets/imgs/day.jpg";
import night from "../../assets/imgs/night.jpg";
import { getDaysOfTheWeek } from "../../services/assistFunctions";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const StyledImg = styled.img`
  width: 30rem;
  border-radius: 0.4rem;
`;

const StyledCity = styled.h1`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 1rem;
  position: absolute;
  font-size: 2.5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledTemp = styled.h1`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 7rem;
  position: absolute;
  font-size: 5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledClimate = styled.p`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 14rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledDay = styled.p`
  color: ${({ theme }) => theme.font_primary_color};
  margin-top: 5rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledDaysBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background_primary_color};
  width: 100%;
  margin-top: -5rem;
  height: 6rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${({ theme }) => theme.button_primary_color};
  border: ${({ theme }) => theme.grouper_border};

  div:nth-child(odd) {
    background: ${({ theme }) => theme.week_temp_background_color};
  }

  div {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export function WeatherInfo({ locationInfo, weatherInfo, isDarkTheme }) {
  const { current, reducedDaily } = weatherInfo;

  return (
    <StyledDiv>
      {isDarkTheme === false ? <StyledImg src={day} alt="Moon Landscape" /> : <StyledImg src={night} alt="Moon Landscape" />}

      <StyledDay>{current.today}</StyledDay>

      <StyledCity>{`${locationInfo.city}/${locationInfo.countryCode}`}</StyledCity>

      <StyledTemp>{current.temp}°C</StyledTemp>
      <StyledClimate>{current.weather[0].description}</StyledClimate>

      {(reducedDaily?.length > 0 || reducedDaily !== undefined) && (
        <StyledDaysBox>
          {reducedDaily.map((day, index) => (
            <div key={day.temp.day}>
              <span>{getDaysOfTheWeek(current.todayNumber, index)}</span>
              <p>{Math.floor(day.temp.day)}°C</p>
              <span>{day.weather[0].description}</span>
            </div>
          ))}
        </StyledDaysBox>
      )}
    </StyledDiv>
  );
}
