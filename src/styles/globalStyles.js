import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .6px;
    }
    a {
        text-decoration: none;
        color: inherit;
        user-select: none;
    }
    ol, ul {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
