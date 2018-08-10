import React from 'react';

import Layout from '../components/layout';
import Region from '../components/region';
import Container from '../components/container';

const IndexPage = () => (
  <Layout>
    <Region left>
      <Container>
        <aside>
          <img src="" alt="" />
        </aside>

        <h2>About Me</h2>
        <p>
          My name is Jamie, I'm a Web Developer from Northampton in the United
          Kingdom - I'm currently working as a Front End Developer for
          Propeller. Interests of mine include programming, open source, graphic
          design, PC gaming, mountain biking and electronic music.
        </p>
      </Container>
    </Region>
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
