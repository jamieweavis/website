import Link from 'gatsby-link';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import './index.css';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="portfolio"
          meta={[
            { name: 'description', content: 'todo' },
            { name: 'keywords', content: 'todo, todo' }
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
