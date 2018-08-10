import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables.css';

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
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%
  top: 0;
  left: 0;
`;

const Header = () => (
  <StyledHeader>
    <h1>Jamie Weavis</h1>
    <h2>JavaScript Developer</h2>
    <StyledCanvas />
  </StyledHeader>
);

export default Header;
