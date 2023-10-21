import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    /* @media (prefers-color-scheme: light) { 
        :root {
            font-size: 62.5%;
            --background: #f6f6f6;
            --header-background: rgba(255,255,255,0.6);
            --second-background: #ffffff;
            --primary: #FFA757;
            --secondary: #7B9BD8;
            --primary-text: #121212;
            --secondary-text: #757575;
        }
      } 

     @media (prefers-color-scheme: dark) {
        :root {
            font-size: 62.5%;
            --background: #121212;
            --header-background: rgba(0,0,0,0.6);
            --second-background: #383838;
            --primary: #ffcc95;
            --secondary: #a2b8e3;
            --primary-text: #efefef;
            --secondary-text: #bdbdbd;
        }
    }  */

    .darkMode {
        --background: #121212;
        --header-background: rgba(0,0,0,0.6);
        --second-background: #383838;
        --primary: #ffcc95;
        --secondary: #a2b8e3;
        --primary-text: #efefef;
        --secondary-text: #bdbdbd;
    }

    .lightMode {
        --background: #f6f6f6;
        --header-background: rgba(255,255,255,0.6);
        --second-background: #ffffff;
        --primary: #FFA757;
        --secondary: #7B9BD8;
        --primary-text: #121212;
        --secondary-text: #757575;
    }

    .sup-text{
        font-family: 'Outfit', sans-serif;
        text-transform: uppercase;
        font-size: 1.3rem;
        color: var(--secondary);
        font-weight: 500;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }

    .main-text{
        font-family: 'Merriweather', serif;
        color: var(--primary-text);
        font-weight: 900;
        margin: 0;
        margin-bottom: 2rem;
    }
    

    .sec-text {
        font-size: 1.5rem;
        color: var(--secondary-text);
        font-weight: 400;
        margin-bottom: 1rem;
    }
    
    html {
        font-size: 62.5%;
        line-height: 1;
        -webkit-text-size-adjust: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    body {
        min-height: 100vh;
        margin: 0;
    }

    main {
        display: block;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 4rem;
    }

    h3, h4, p {
        margin: 0; 
    }

    h2{
        font-size: 3rem;
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
        appearance: button;
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
        appearance: textfield;
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