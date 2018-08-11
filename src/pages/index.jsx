import React from 'react';

import Layout from '../components/layout';
import Region from '../components/region';
import Container from '../components/container';
import Avatar from '../components/avatar';

const AboutRegion = Region.extend`
  h2,
  p {
    text-align: left;
  }
`;

const FlexContainer = Container.extend`
  display: flex;
`;

const IndexPage = () => (
  <Layout>
    <AboutRegion>
      <FlexContainer>
        <Avatar />
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
    <Region>
      <Container>
        <h2>Work Experience</h2>
        <p>
          During my development career I have worked in the following positions
        </p>
      </Container>
    </Region>
    <Region>
      <Container>
        <h2>My Skills</h2>
        <p>
          I have experience working with a number of different technologies -
          the most important of which are listed below
        </p>
      </Container>
    </Region>
    <Region>
      <Container>
        <h2>Featured Projects</h2>
        <p>
          Here is a selection of my favourite personal open-source projects
          hosted on GitHub
        </p>
      </Container>
    </Region>
    <Region>
      <Container>
        <h2>Contact Me</h2>
        <p>
          Feel free to get in touch or follow me on the platforms listed below
        </p>
      </Container>
    </Region>
  </Layout>
);

export default IndexPage;
