import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  position: absolute;
  bottom: 20px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    font-family: Lato;
    margin: 0 10px;
    color: #fefefe;
    font-size: 24px;
    letter-spacing: -0.3px;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: ${({ side }) => (side === 'right' ? '#fd5c63' : '#171717')};
    }
  }
`;

const BottomNav = ({ side, children }) => (
  <StyledList side={side}>
    {React.Children.map(children, (child, index) => (
      <li key={index}>{child}</li>
    ))}
  </StyledList>
);

BottomNav.propTypes = {
  side: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BottomNav;
