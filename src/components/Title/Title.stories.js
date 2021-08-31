import React from 'react';
import {Title} from '../Title/Title.js'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../GlobalStyles/theme';
import { GlobalStyle } from '../../GlobalStyles/globalTheme.js';

export default {
  title: 'Título H1',
  component: Title,
};

const Template = (args) => {

  return ( 
    <ThemeProvider theme={args.theme}>
      <GlobalStyle />
      <Title {...args} />
    </ThemeProvider>
      
  )
} 

export const Default = Template.bind({});
Default.args = {
  children: 'Seu título Aqui',
  theme: lightTheme
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Seu título Aqui',
  theme: darkTheme
};


