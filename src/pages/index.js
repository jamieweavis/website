import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import SEO from '../components/seo';
import Container from '../components/FlexContainer';
import Side from '../components/Side';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Description from '../components/Description';
import AnimatedBackground from '../components/AnimatedBackground';
import BottomNav from '../components/BottomNav';

const GlobalStyle = createGlobalStyle`
  html, body, div[role="group"][tabindex], #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }
`;

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <SEO
      keywords={[
        `JavaScript`,
        `Developer`,
        `Full Stack`,
        `Software`,
        `Engineer`,
        `United Kingdom`,
        'UK',
      ]}
    />
    <Container>
      <Side side="left">
        <Title>Jamie Weavis</Title>
        <Subtitle>Full Stack JavaScript Developer</Subtitle>
        <BottomNav side="left">
          <a
            id="twitter-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jamieweavis"
          >
            <FaTwitter />
          </a>
          <a
            id="github-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jamieweavis"
          >
            <FaGithub />
          </a>
          <a
            id="twitter-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jamieweavis/"
          >
            <FaLinkedinIn />
          </a>
        </BottomNav>
      </Side>
      <Side side="right">
        <AnimatedBackground />
        <Description>
          I like to build stuff, currently engineering at{' '}
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
