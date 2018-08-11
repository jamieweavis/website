import React from 'react';
import styled from 'styled-components';

import avatar from '../img/avatar@2x.jpg';

const StyledAvatar = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 5rem;
  border-radius: 1rem;
  flex-shrink: 0;
`;

const Avatar = () => <StyledAvatar src={avatar} alt="Avatar" />;

export default Avatar;
