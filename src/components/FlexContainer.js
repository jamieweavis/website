import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
  display: flex;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const FlexContainer = ({ children }) => <Main>{children}</Main>;

FlexContainer.propTypes = {
  children: PropTypes.node,
};

export default FlexContainer;
