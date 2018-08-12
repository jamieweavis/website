import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../styles/variables.css';
import Container from './container';

const StyledFooter = styled.footer`
  background-color: ${colors.gradient.start};
  background: linear-gradient(
    225deg,
    ${colors.gradient.start},
    ${colors.gradient.middle},
    ${colors.gradient.end}
  );
  padding: 15px 0;
  font-size: 1.4rem;
  position: relative;
  a {
    border-radius: 0.5rem;
    color: ${colors.white};
    text-decoration: none;
    border: 1px solid white;
    padding: 10px;
    transition: 0.2s ease;
    :hover {
      background: ${colors.white};
      color: ${colors.gradient.start};
    }
  }
`;

const FlexContainer = Container.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = ({ children }) => (
  <StyledFooter>
    <FlexContainer>{children}</FlexContainer>
  </StyledFooter>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
