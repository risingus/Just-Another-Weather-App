import day from "../../assets/imgs/day.jpg";
import night from "../../assets/imgs/night.jpg";
import { getDaysOfTheWeek } from "../../services/assistFunctions";
import PropTypes from "prop-types";
import { StyledCity, StyledClimate, StyledDay, StyledDaysBox, StyledDiv, StyledImg, StyledTemp } from "./styles";



export function WeatherCard({ locationInfo, weatherInfo, isDarkTheme }) {
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


WeatherCard.propTypes = {
  locationInfo: PropTypes.node.isRequired,
  weatherInfo: PropTypes.node.isRequired,
  isDarkTheme: PropTypes.bool.isRequired
};
