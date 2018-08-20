import { injectGlobal } from 'styled-components';
import styledReset from 'styled-reset';

import { fonts, colors } from './variables.css';

export default injectGlobal`
  ${styledReset}

  @import url('https://fonts.googleapis.com/css?family=Lobster|Prompt');

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${fonts.sansSerif};
    color: ${colors.white};
    background-color: ${colors.black};
  }

  h1 {
    font-family: ${fonts.display};
    font-size: 7rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem
    font-weight: bold;
    margin-bottom: 5rem;
    position: relative;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
    line-height: 2.5rem;
  }

  ::selection {
    background-color: ${colors.gradient.middle};
    color: ${colors.white};
    opacity: 1;
  }

`;
