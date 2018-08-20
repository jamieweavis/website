import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Region from '../region';
import Container from '../container';
import Avatar from './about/avatar';

import { sizes } from '../../styles/variables.css';
import { media } from '../../styles/mixins.css';

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
  <StaticQuery
    query={graphql`
      query {
        regionsJson(id: { eq: "about" }) {
          id
          title
          description
        }
      }
    `}
    render={({ regionsJson }) => (
      <AboutRegion>
        <FlexContainer>
          <Avatar />
          <div>
            <h2>{regionsJson.title}</h2>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: regionsJson.description }}
            />
          </div>
        </FlexContainer>
      </AboutRegion>
    )}
  />
);

export default About;
