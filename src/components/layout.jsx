import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import '../styles/main.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query siteMetadataQuery {
        site {
          siteMetadata {
            title
            metaTags {
              name
              content
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={data.site.siteMetadata.metaTags}
        />
        <Header />
        <main>{children}</main>
        <Footer>
          &copy; Jamie Weavis 2018. All rights reserved.{' '}
          <a href="https://github.com/jamieweavis/portfolio">View source ❤</a>
        </Footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
