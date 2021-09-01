import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalTheme.js";
import { TestButton } from "../src/components/TestButton/TestButton.js";
import { useState } from "react";
import { lightTheme, darkTheme } from "./GlobalStyles/theme";
import { SwitchButton } from "./components/ThemeSwitcher/ThemeSwitcher";
import { Title } from "./components/Title/Title";
import { Grouper } from "./components/Grouper/Grouper";
import { GrouperButton } from "./components/GrouperButton/GrouperButton.js";
import { Loader } from "./components/Loader/Loader.js";
import { weatherApi } from "./services/apis";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [showWeather, setShowWeather] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    country: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    feelsLike: "",
    weather: "",
  });

  function handleTheme() {
    setDarkTheme(!isDarkTheme);
  }

  async function getWeather(lat, lon) {
    setIsLoading(true)

    await weatherApi
      .get(`weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=en_us`)
      .then(async ({ data }) => {
        setWeatherInfo({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          feelsLike: data.main.feels_like,
          weather: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        });

        setTimeout(() => {
          setShowWeather(true);
          setIsLoading(false);
        }, 1000);
      });
  }

  function handleSucess(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getWeather(lat, lon);
  }

  async function handleWeatherLocation() {
    await navigator.geolocation.getCurrentPosition(handleSucess);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Grouper>
        <Title>Um teste aqui</Title>
        <SwitchButton onClick={handleTheme} isDarkTheme={isDarkTheme} />
      </Grouper>

      <GrouperButton>
        <TestButton onClick={handleWeatherLocation}>Your weather</TestButton>
        <TestButton onClick={handleTheme}>Find Weather</TestButton>
      </GrouperButton>

      <Loader isLoading={isLoading} />
    </ThemeProvider>
  );
}

export default App;
