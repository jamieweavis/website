import React from 'react';
import styled from 'styled-components';

import Region from '../region';
import Container from '../container';

import { sizes } from '../../styles/variables.css';
import { media } from '../../styles/mixins.css';

import avatar from '../../img/avatar@2x.jpg';

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  flex-shrink: 0;
  margin-right: 5rem;

  ${media(
    sizes.medium,
    `
      margin-right: 0;
      margin-bottom: 5rem;
    `
  )};
`;

const FlexContainer = Container.extend`
  display: flex;

  ${media(
    sizes.medium,
    `
      flex-direction: column;
      align-items: center;
    `
  )};
`;

const AboutRegion = Region.extend`
  h2,
  p {
    text-align: left;
  }

  ${media(
    sizes.medium,
    `
      h2, p {
        text-align: center;
      }
    `
  )};
`;

const About = () => (
  <AboutRegion>
    <FlexContainer>
      <Avatar src={avatar} />
      <div>
        <h2>About Me</h2>
        <p>
          My name is Jamie, I&apos;m a Software Developer from Northampton in
          the United Kingdom - I&apos;m currently working as a Lead JavaScript
          Developer for Smart Recruit.
        </p>
        <p>
          Interests of mine include programming, open source software, graphic
          design, gaming and electronic music.
        </p>
      </div>
    </FlexContainer>
  </AboutRegion>
);

export default About;
