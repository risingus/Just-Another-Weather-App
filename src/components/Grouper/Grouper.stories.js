import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../GlobalStyles/theme';
import { GlobalStyle } from '../../GlobalStyles/globalTheme.js';
import { Grouper } from './Grouper';
import {Title} from '../Title/Title'

export default {
  title: 'Box de elementos',
  component: Grouper,
};

const Template = (args) => {

  return ( 
    <ThemeProvider theme={args.theme}>
      <GlobalStyle />
      <Grouper {...args}>
      </Grouper>
    </ThemeProvider>
      
  )
} 

export const Default = Template.bind({});
Default.args = {
  children: <Title>Teste</Title>,
  theme: lightTheme
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Title>Teste</Title>,
  theme: darkTheme
};