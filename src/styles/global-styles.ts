import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/fonts.css';

const GlobalStyles = createGlobalStyle`
${reset}
a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'SCoreDream', sans-serif;
        font-size: 14px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }
`;

export default GlobalStyles;
