import React from 'react';
import styled from 'styled-components';

import { sizes } from '../../../styles/variables.css';
import { media } from '../../../styles/mixins.css';

import avatar from '../../../img/avatar@2x.jpg';

const StyledAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  flex-shrink: 0;
  margin-right: 5rem;
  ${media(
    sizes.medium,
    `
      margin-right: 0;
      margin-bottom: 5rem;
    `
  )};
`;

const Avatar = () => <StyledAvatar src={avatar} />;

export default Avatar;
