import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    body {
        background-color: ${(props) => props.theme.background_primary_color};
        font-family: 'Roboto Mono', sans-serif;
    }   
`;

