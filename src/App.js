import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles/globalTheme.js'
import {TestButton} from '../src/components/TestButton/TestButton.js'
import {useState} from 'react'
import {lightTheme, darkTheme} from './GlobalStyles/theme';
import { SwitchButton } from './components/ThemeSwitcher/ThemeSwitcher'
import {Title} from './components/Title/Title';
import {Grouper} from './components/Grouper/Grouper'


function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);

  function handleTheme() {
    setDarkTheme(!isDarkTheme)
  } 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Grouper>
        <Title>Um teste aqui</Title>
        <SwitchButton onClick={handleTheme} isDarkTheme={isDarkTheme} /> 
      </Grouper>
      <TestButton onClick={handleTheme}>apenas um botão</TestButton>
    </ThemeProvider>
  );
}

export default App;
