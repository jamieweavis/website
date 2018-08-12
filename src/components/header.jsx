import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, sizes } from '../styles/variables.css';
import { media } from '../styles/mixins.css';

const StyledHeader = styled.header`
  background-color: ${colors.gradient.start};
  background: linear-gradient(
    45deg,
    ${colors.gradient.start},
    ${colors.gradient.middle},
    ${colors.gradient.end}
  );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12% 0;

  h2 {
    color: ${colors.black};
    margin-bottom: 0;
  }

  ${media(
    sizes.small,
    `
      h1 {
        font-size: 6rem;
      }
      h2 {
        font-size: 2.5rem;
      }
    `
  )};

  ${media(
    sizes.xsmall,
    `
      h1 {
        font-size: 5rem;
      }
      h2 {
        font-size: 2rem;
      }
    `
  )};
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%
  top: 0;
  left: 0;
`;

const Header = ({ children }) => (
  <StyledHeader>
    {children}
    <StyledCanvas />
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
