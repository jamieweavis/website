import React from 'react';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import SEO from '../components/seo';
import Container from '../components/FlexContainer';
import Side from '../components/Side';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Description from '../components/Description';
import AnimatedBackground from '../components/AnimatedBackground';
import BottomNav from '../components/BottomNav';

const GlobalStyle = createGlobalStyle`
  html, body, div[role="group"][tabindex], #___gatsby {
    height: 100%;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

const PageNotFound = () => (
  <React.Fragment>
    <GlobalStyle />
    <SEO keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Side side="left">
        <Title>404</Title>
        <Subtitle>Page Not Found.</Subtitle>
        <BottomNav side="left">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jamieweavis"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jamieweavis"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jamieweavis"
          >
            LinkedIn
          </a>
        </BottomNav>
      </Side>
      <Side side="right">
        <AnimatedBackground />
        <Description>
          Return to <Link to="/">home</Link>.
        </Description>
        <BottomNav side="right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jamieweavis/website"
          >
            &lt;ViewSource /&gt;
          </a>
        </BottomNav>
      </Side>
    </Container>
  </React.Fragment>
);

export default PageNotFound;
