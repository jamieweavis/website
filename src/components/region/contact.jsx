import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Region from '../region';
import Container from '../container';

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        regionsJson(id: { eq: "contact" }) {
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

export default Contact;
