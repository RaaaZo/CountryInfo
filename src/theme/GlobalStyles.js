import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

ul, li, a {
     font-family: 'Oswald', sans-serif;
    text-decoration: none;
    list-style: none;
}

h3 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    
}

button {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    cursor: pointer
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin-bottom: 40px;
    background-color: #25B7E5;
    line-height: 1.5;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
