import React from "react";
import { SearchAnotherWeather } from "./SearchAnotherWeather";
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from "../../GlobalStyles/theme";
import { GlobalStyle } from "../../GlobalStyles/globalTheme";

export default {
  title: "Search Form",
  component: SearchAnotherWeather,
};

const Template = (args) => {
  return (
    <ThemeProvider theme={args.theme}>
      <GlobalStyle />
      <SearchAnotherWeather {...args} />
    </ThemeProvider>
      
  );
};

export const Light = Template.bind({});
Light.args = {
  handleSearchLocation: undefined,
  theme: lightTheme,
};

export const Dark = Template.bind({});
Dark.args = {
  handleSearchLocation: undefined,
  theme: darkTheme,
};
