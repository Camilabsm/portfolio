import { createGlobalStyle } from "styled-components"
import GabaritoRegular from "./fonts/Gabarito-Regular.ttf"
import GabaritoExtraBold from "./fonts/Gabarito-ExtraBold.ttf"

const GlobalStyles = createGlobalStyle`

    /* @media (prefers-color-scheme: light) { */
    :root {
        font-size: 62.5%;
        --background: #f6f6f6;
        --primary: #F456C7;
        --icons: #c7f456;
        --accent: #f48356;
        --primary-text: #212121;
        --secondary-text: #757575;
        --divider: #BDBDBD;
    }

    /* @media (prefers-color-scheme: dark) {
    :root {
        --text: #f8e8f5;
        --background: #040103;
        --primary: #932f4d;
        --secondary: #421e15;
        --accent: #ca6f58;
    }
    } */

    @font-face {
        font-family: 'GabaritoRegular';
        src: local('Gabarito Regular'), local('GabaritoRegular'), url(${GabaritoRegular});
    }

    @font-face {
        font-family: 'GabaritoExtraBold';
        src: local('Gabarito Extra Bold'), local('GabaritoExtraBold'), url(${GabaritoExtraBold});
    }
    
    html {
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%;
        font-family: 'GabaritoRegular';
        font-weight: 400;
        background-color: var(--background);
    }
    body {
        margin: 0;
        min-height: 100vh;
    }
    main {
        display: block;
    }
    h1 {
        font-size: 2.4em;
        margin: 0;
    }
    h3, h4, p {
        margin: 0; 
    }

    h4{
        color: var(--primary-text);
    }

    p {
        color: var(--secondary-text);
    }

    hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible; 
    }
    a {
        background-color: transparent;
        color: var(--primary-text);
        text-decoration: none;
    }
    abbr[title] {
        border-bottom: none; 
        text-decoration: underline; 
        text-decoration: underline dotted; 
    }
    b, 
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    samp {
        font-family: monospace, monospace; 
        font-size: 1.6rem; 
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    img {
        border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0; 
    }
    button,
    input { 
        overflow: visible;
    }
    button,
    select { 
        text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    legend {
        box-sizing: border-box; 
        color: inherit; 
        display: table; 
        max-width: 100%; 
        padding: 0; 
        white-space: normal; 
    }
    progress {
        vertical-align: baseline;
    }
    textarea {
        overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; 
        padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield; 
        outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button; 
        font: inherit; 
    }
    details {
        display: block;
    }
    summary {
        display: list-item;
    }
    template {
        display: none;
    }
    [hidden] {
        display: none;
    }
`

export default GlobalStyles