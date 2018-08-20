import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Region from '../region';
import Container from '../container';

const Experience = () => (
  <StaticQuery
    query={graphql`
      query {
        regionsJson(id: { eq: "work" }) {
          id
          title
          description
        }
      }
    `}
    render={({ regionsJson }) => (
      <Region>
        <Container>
          <h2>{regionsJson.title}</h2>
          <p>{regionsJson.description}</p>
        </Container>
      </Region>
    )}
  />
);

export default Experience;
