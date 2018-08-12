import React from 'react';

import Layout from '../components/layout';
import About from '../components/region/about';
import Contact from '../components/region/contact';
import Experience from '../components/region/experience';
import Skills from '../components/region/skills';
import Projects from '../components/region/projects';

const IndexPage = () => (
  <Layout>
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
