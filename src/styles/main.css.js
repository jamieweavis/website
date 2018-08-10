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
    background-color: ${colors.white};
  }

  h1 {
    font-family: ${fonts.serif};
    font-size: 7rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem
    font-weight: bold;
    margin-bottom: 5rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

`;
