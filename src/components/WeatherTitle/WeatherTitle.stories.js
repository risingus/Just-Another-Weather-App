import React from 'react';
import { WeatherTitle } from './WeatherTItle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../GlobalStyles/theme';
import { GlobalStyle } from '../../GlobalStyles/globalTheme.js';

export default {
  title: 'Title H1',
  component: WeatherTitle,
};

const Template = (args) => {

  return ( 
    <ThemeProvider theme={args.theme}>
      <GlobalStyle />
      <WeatherTitle {...args} />
    </ThemeProvider>
      
  )
} 

export const Light = Template.bind({});
Light.args = {
  children: 'Seu título Aqui',
  theme: lightTheme
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Seu título Aqui',
  theme: darkTheme
};


