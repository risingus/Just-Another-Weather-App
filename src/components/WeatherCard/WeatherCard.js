import styled from 'styled-components';
import moon from '../../assets/imgs/moon.svg';
import day from '../../assets/imgs/day.jfif';
import night from '../../assets/imgs/night.jfif';
import { getDaysOfTheWeek } from '../../services/assistFunctions';


const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const StyledImg = styled.img`
  width: 28rem;
  border-radius: .4rem;
`;

const StyledCity = styled.h1`
  color: ${({theme}) => theme.font_primary_color};
  margin-top: 1rem;
  position: absolute;
  font-size: 2.5rem;
  text-shadow: 3px 3px 0px black;
`; 

const StyledTemp = styled.h1`
  color: ${({theme}) => theme.font_primary_color};
  margin-top: 7rem;
  position: absolute;
  font-size: 5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledClimate = styled.p`
  color: ${({theme}) => theme.font_primary_color};
  margin-top: 14rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledDay = styled.p`
  color: ${({theme}) => theme.font_primary_color};
  margin-top: 5rem;
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0px black;
`;

const StyledDaysBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 100%;
  margin-top: -5rem;
  height: 6rem;
  border-bottom-left-radius: .4rem;
  border-bottom-right-radius: .4rem;

  div:nth-child(odd){
    background: rgba(0, 0, 0, .05);
  }

  div {
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: .5rem;


    span {
      text-align: center;
      width: min-content;
      font-size: .7rem;
      font-weight: bold;
    }
  }
`;

export function WeatherInfo({locationInfo, weatherInfo, isDarkTheme}) {
  const {current, reducedDaily} = weatherInfo

  console.log(isDarkTheme)

  return (
    <StyledDiv>

      {
        isDarkTheme === false ? (
          <StyledImg src={day} alt="Moon Landscape"/>
        ) : (
          <StyledImg src={night}  alt="Moon Landscape"/>
        )

      }
      

      

      <StyledDay>
        {current.today}
      </StyledDay>
      
      <StyledCity>
        {`${locationInfo.city}/${locationInfo.countryCode}`}
      </StyledCity>

      
      <StyledTemp>{current.temp}°C</StyledTemp>
      <StyledClimate>{current.weather[0].description}</StyledClimate>

      <StyledDaysBox>
        {
          reducedDaily.map((day, index) => (
            <div key={day.dt}>
              <span>{getDaysOfTheWeek(current.todayNumber, index)}</span>
              <p>{Math.floor(day.temp.day)}°C</p>
              <span>{day.weather[0].description}</span>
            </div>
          ))
        }
      </StyledDaysBox>
    </StyledDiv>
  )
}
