import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const { title, description, author } = siteMetadata;
  const lang = 'en';

  return (
    <Helmet>
      {lang && <html lang={lang} />}
      {lang && <meta property="og:locale" content={lang} />}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {author && <meta name="twitter:creator" content={`@${author}`} />}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Person',
          name: 'Jamie Weavis',
          url: 'https://www.jamieweavis.dev/',
          image: 'https://avatars3.githubusercontent.com/u/8133259?s=460&v=4',
          sameAs: [
            'https://twitter.com/jamieweavis',
            'https://www.linkedin.com/in/jamieweavis/',
            'https://github.com/jamieweavis',
          ],
          jobTitle: 'Full Stack JavaScript Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'ParkIT',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
