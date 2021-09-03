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
import { WeatherCard } from "./components/WeatherCard/WeatherCard.js";
import { WeatherTitle } from "./components/WeatherTitle/WeatherTItle";
import moment from "moment";
import { translateWeekDays } from "./services/assistFunctions";
import { ErrorLocation } from "./components/ErrorLocation/ErrorLocation.js";
import { SearchAnotherWeather } from "./components/SearchAnotherWeather/SearchAnotherWeather.js";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [showWeather, setShowWeather] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
      const weather = await getWeather(lat, lon);
      const location = await getLocation(lat, lon);
      setWeatherInfo(weather);
      setLocationInfo(location);

      setTimeout(() => {
        setShowWeather(true);
        setIsLoading(false);
      }, 1000);
    } catch {
      setErrorMessage(`Sorry, something went wrong...`);
      setIsLoading(false);
      setIsError(true);
    }
  }

  const getLocation = async (lat, lon) => {
    const response = await localApi.get(`reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`);
    const { city, country_code } = response.data.address;
    const countryCodeUpperCase = country_code.charAt(0).toUpperCase() + country_code.slice(1);
    return {
      city,
      countryCode: countryCodeUpperCase,
    };
  };

  const getWeather = async (lat, lon) => {
    const response = await weatherApi.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&cnt=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    const { current, daily } = response.data;
    daily.pop();

    const reducedDaily = daily.map((day) => ({
      temp: day.temp,
      weather: day.weather,
    }));

    const today = translateWeekDays(moment().weekday());

    current.temp = Math.floor(current.temp);
    current.today = today;
    current.todayNumber = moment().weekday();

    return { current, reducedDaily };
  };

  function handleSucess(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getData(lat, lon);
    handleModalError();
  }

  function handleError() {
    setErrorMessage(`Sorry, can't get your location without permission...`);
    setIsError(true);
  }

  async function handleWeatherLocation() {
    await navigator.geolocation.getCurrentPosition(handleSucess, handleError);
    setShowSearch(false);
  }

  function handleShowSearchLocation() {
    setShowSearch(true);
    setShowWeather(false);
    setLocationInfo({});
    setWeatherInfo([]);
  }

  async function getWeatherOfWeek(lat, lon) {
    const response = await weatherApi.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&cnt=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    const { current, daily } = response.data;
    daily.pop();

    const reducedDaily = daily.map((day) => ({
      temp: day.temp,
      weather: day.weather,
    }));

    const today = translateWeekDays(moment().weekday());

    current.temp = Math.floor(current.temp);
    current.today = today;
    current.todayNumber = moment().weekday();

    return { current, reducedDaily };
  }

  async function handleSearchLocation(e, search) {
    e.preventDefault();
    setIsLoading(true);
    await weatherApi
      .get(`weather?q=${search}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=en_us`)
      .then(async ({ data }) => {
        const countryCode = data.sys.country.slice(0, 1) + data.sys.country.charAt(1).toLowerCase();
        const lat = data.coord.lat;
        const lon = data.coord.lon;

        setWeatherInfo(await getWeatherOfWeek(lat, lon));

        setLocationInfo({
          city: data.name,
          countryCode: countryCode,
        });

        setTimeout(() => {
          setIsLoading(false);
          setShowSearch(false);
          setShowWeather(true);
        }, 1000);
      })
      .catch(() => {
        setErrorMessage("Sorry, something went wrong");
        setIsError(false);
      });
  }

  function handleModalError() {
    setIsError(false);
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
          <WeatherTitle>Find Weather</WeatherTitle>
          <GrouperButton>
            <TestButton onClick={handleWeatherLocation}>Your weather</TestButton>
            <TestButton onClick={handleShowSearchLocation}>Find Weather</TestButton>
          </GrouperButton>

          {showSearch && <SearchAnotherWeather handleSearchLocation={handleSearchLocation} />}

          {showWeather && isLoading === false && <WeatherCard weatherInfo={weatherInfo} locationInfo={locationInfo} isDarkTheme={isDarkTheme} />}
        </WeatherDiv>
      </GlobalDiv>

      <Loader isLoading={isLoading} />
      <ErrorLocation isError={isError} setIsError={handleModalError} errorMessage={errorMessage} />
    </ThemeProvider>
  );
}

export default App;
