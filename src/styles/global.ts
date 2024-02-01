import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 16px;

  color-scheme: ${props => props.theme.type};
  color: ${props => props.theme.palette.TEXT.PRIMARY};
  background-color: ${props => props.theme.palette.BACKGROUND.DEFAULT};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  height: 100vh;
}

html {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  /* 1 */
  line-height: 1.4;
  /* 3 */
  font-size: 1em;
  /* 3 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

body {
  margin: 0;
  height: 100vh;
}

*,
*:before,
*:after {
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

button {
  font: 500 14px 'Raleway', sans-serif;
}

`;