import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset and base styles  */
  * {
    padding: 0px;
    margin: 0px;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Links */

  a, a:link, a:visited  {
      text-decoration: none;
      color: #000;
  }

  a:hover  {
      text-decoration: none;
  }

  /* Common */

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
      font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input, textarea, button, select {
    font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
      display: inline-block;
      box-shadow: none;
      background-color: transparent;
      background: none;
      cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
      outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }

  * {
    font-family: ${props => props.theme.font};
  }

  h2 {
    font-size: 80px;
    font-weight: 800;
    margin: 0 0 100px 0;
    text-transform: uppercase;
  }

  h3 {
    font-size: 40px;
    font-weight: 800 !important;
    font-weight: bold;
    line-height: 56px;

    @media (max-width: 600px) {
      line-height: 40px;
    }
  }

  h4 {
    font-size: 40px;
    font-weight: 200 !important;
    font-weight: bold;
    line-height: 56px;
  }

  p { 
    text-align: justify;
    font-weight: 400 !important;
    line-height: 27px;
  }

  img {
    object-fit: cover;
  }

  body {
    overflow-x: hidden;
  }

  @media(max-width: 500px) {
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 30px;
    }
  }
`

