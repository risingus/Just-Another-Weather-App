import { lightTheme, darkTheme } from '../../GlobalStyles/theme';
import { ThemeProvider } from 'styled-components';

import {WeatherCard} from './WeatherCard';
import { GlobalStyle } from '../../GlobalStyles/globalTheme';

export default {
  title: 'Weather Card',
  component: WeatherCard,
};

const weatherInfo = {
  current: {
    temp: 28,
    today: 'Friday',
    todayNumber: 5,

    weather: [
      {
        description: 'clear sky'
      }
    ],
  },
  reducedDaily: [
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
    {
      temp: {
        day: 28
      },
      weather: [
      {
        description: 'clar sky'
      }
      ]
    },
  ]
}


const Template = (args) => {
  console.log(args)

  return ( 
    <ThemeProvider theme={args.isDarkTheme === false ? lightTheme : darkTheme}> 
    <GlobalStyle />
      <WeatherCard {...args} weatherInfo={args.weatherInfo} locationInfo={args.locationInfo} isDarkTheme={args.isDarkTheme}/>
    </ThemeProvider>
    
  )
} 

export const Light = Template.bind({});
Light.args = {
  isDarkTheme: false,
  locationInfo: {
    city: 'Fortaleza',
    countryCode: 'Br'
  },
  weatherInfo: weatherInfo
};

export const Dark = Template.bind({});
Dark.args = {
  isDarkTheme: true,
  locationInfo: {
    city: 'Fortaleza',
    countryCode: 'Br'
  },
  weatherInfo: weatherInfo
};