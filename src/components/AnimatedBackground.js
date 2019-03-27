import styled, { keyframes } from 'styled-components';

import topography from '../images/topography';

const slide = keyframes`
  from { transform: translateX(0) translateY(0); }
  to { transform: translateX(-600px) translateY(-600px); }
`;

export default styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${slide} 20s linear infinite;

  &:after {
    position: absolute;
    width: 400%;
    height: 400%;
    content: '';
    background-color: #171717;
    background-image: url("${topography}");
  }
`;
