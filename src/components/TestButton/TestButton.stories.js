import React from 'react';
import { lightTheme, darkTheme } from '../../GlobalStyles/theme';
import { GlobalStyle } from '../../GlobalStyles/globalTheme';
import { ThemeProvider } from 'styled-components';

import { TestButton } from './TestButton';

export default {
  title: 'TestButton',
  component: TestButton,
};

const Template = (args) => {

  return ( 
    <ThemeProvider theme={args.theme}> 
      <GlobalStyle />
      <TestButton {...args} />
    </ThemeProvider>
  )
} 

export const Small = Template.bind({});
Small.args = {
  $size: 'small',
  children: 'Small',
  theme: lightTheme
};

export const SmallDark = Template.bind({});
SmallDark.args = {
  $size: 'small',
  children: 'Small',
  theme: darkTheme
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  $size: 'small',
  children: 'Small',
  $buttonType: 'cancel',
  theme: lightTheme
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Default',
  theme: lightTheme
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Default',
  theme: darkTheme
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  $buttonType: 'cancel',
  theme: lightTheme
};

export const Large = Template.bind({});
Large.args = {
  $size: 'large',
  children: 'Large',
  theme: lightTheme
};


export const LargeDark = Template.bind({});
LargeDark.args = {
  $size: 'large',
  children: 'Large',
  theme: darkTheme
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  $size: 'large',
  children: 'Large Secondary',
  $buttonType: 'cancel',
  theme: lightTheme
};

