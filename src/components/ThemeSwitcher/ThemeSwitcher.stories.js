import React, {useState} from 'react';
import { lightTheme, darkTheme } from '../../GlobalStyles/theme';
import { ThemeProvider } from 'styled-components';

import { SwitchButton } from './ThemeSwitcher';
import { GlobalStyle } from '../../GlobalStyles/globalTheme';

export default {
  title: 'Theme Switcher',
  component: SwitchButton,
};

const Template = (args) => {
  const [isDarkTheme, setDarkTheme] = useState(args.theme)

  function handleTheme() {
    setDarkTheme(!isDarkTheme)
  } 

  return ( 
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}> 
    <GlobalStyle />
      <SwitchButton {...args} onClick={handleTheme} isDarkTheme={isDarkTheme}/>
    </ThemeProvider>
    
  )
} 

export const Small = Template.bind({});
Small.args = {
  $size: 'small',
  theme: false,
};

export const SmallDark = Template.bind({});
SmallDark.args = {
  $size: 'small',
  theme: true,
};

export const Default = Template.bind({});
Default.args = {
  $size: 'medium',
  theme: false,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  $size: 'medium',
  theme: true,
};

export const Large = Template.bind({});
Large.args = {
  $size: 'large',
  theme: false,
};

export const LargeDark = Template.bind({});
LargeDark.args = {
  $size: 'large',
  theme: true,
};
