import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalTheme.js";
import { TestButton } from "../src/components/TestButton/TestButton.js";
import { useState } from "react";
import { lightTheme, darkTheme } from "./GlobalStyles/theme";
import { SwitchButton } from "./components/ThemeSwitcher/ThemeSwitcher";
import { Title } from "./components/Title/Title";
import { Grouper } from "./components/Grouper/Grouper";
import { GrouperButton } from "./components/GrouperButton/GrouperButton.js";
import { Loader } from "./components/Loader/Loader.js";
import { weatherApi, localApi } from "./services/apis";
import { WeatherInfo } from "./components/WeatherCard/WeatherCard.js";
import {WeatherTitle } from './components/WeatherTitle/WeatherTItle'
import moment from "moment";
import {translateWeekDays} from './services/assistFunctions';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [showWeather, setShowWeather] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationInfo, setLocationInfo] = useState({
    city: "",
    country: "",
    countryCode: "",
  });
  const [weatherInfo, setWeatherInfo] = useState([]);

  function handleTheme() {
    setDarkTheme(!isDarkTheme);
  }

  async function getData(lat, lon) {
    setIsLoading(true);

    try {
      const weather = await getWeather(lat, lon)
      const location = await getLocation(lat, lon)
        setWeatherInfo(weather)
        setLocationInfo(location)
  
      setTimeout(() => {
        setShowWeather(true);
        setIsLoading(false);
      }, 1000);
    } catch {
      console.log('aqui')
    }
  }

  const getLocation = async (lat, lon) => {
    const response = await localApi.get(`reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`)
      const {city, country, country_code} = response.data.address;
      const countryCodeUpperCase = country_code.charAt(0).toUpperCase() + country_code.slice(1)
      return {
        city, country, countryCode: countryCodeUpperCase
      }
  }

  const getWeather = async (lat, lon) => {
    const response = await weatherApi
    .get(`onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&cnt=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

      const {current, daily} = response.data
      daily.pop()

      const reducedDaily = daily.map((day) => ({
        temp: day.temp,
        weather: day.weather
      }))

      
      const today = translateWeekDays(moment().weekday())

      current.temp = Math.floor(current.temp)
      current.today = today
      current.todayNumber = moment().weekday()
      
      return {current, reducedDaily};
  }

  function handleSucess(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getData(lat, lon);
  }

  async function handleWeatherLocation() {
    await navigator.geolocation.getCurrentPosition(handleSucess);
  }

  const GlobalDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;

    @media (max-width: 840px) {
      flex-direction: column;
      gap: 2rem;
    }
  `;

  const WeatherDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  `;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />

      <GlobalDiv>

      <Grouper>
        <SwitchButton onClick={handleTheme} isDarkTheme={isDarkTheme} $size="large" />
        <Title>Just another weather app</Title>
      </Grouper>
      
      <WeatherDiv>
      <WeatherTitle>Find your weather</WeatherTitle>
      <GrouperButton>
        <TestButton onClick={handleWeatherLocation}>Your weather</TestButton>
        <TestButton onClick={handleTheme}>Find Weather</TestButton>
      </GrouperButton>

      {(showWeather && isLoading === false) && (
      <WeatherInfo 
        weatherInfo={weatherInfo}
        locationInfo={locationInfo}
        isDarkTheme={isDarkTheme}
      />
      )}

      </WeatherDiv>

      </GlobalDiv>
      

      

      <Loader isLoading={isLoading} />
    </ThemeProvider>
  );
}

export default App;
