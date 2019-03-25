import React from 'react';
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

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Side side="left">
        <Title>Jamie Weavis</Title>
        <Subtitle>Full Stack JavaScript Developer</Subtitle>
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
            href="https://www.linkedin.com/in/jamieweavis/"
          >
            LinkedIn
          </a>
        </BottomNav>
      </Side>
      <Side side="right">
        <AnimatedBackground />
        <Description>
          I like building stuff, currently engineering at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://park-it-solutions.com"
          >
            Park IT
          </a>
          .
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

export default IndexPage;
