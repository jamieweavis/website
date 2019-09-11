import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background: ${({ side }) => (side === 'right' ? '#2c323a' : '#1ad6bd')};
  text-align: ${({ side }) => (side === 'right' ? 'left' : 'center')};
  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex: none;
  }
`;

const Side = ({ children, side }) => <Section side={side}>{children}</Section>;

Side.propTypes = {
  side: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Side;
