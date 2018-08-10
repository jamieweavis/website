import styled from 'styled-components';

import { colors } from '../styles/variables.css';

const StyledRegion = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${colors.black};
  text-align: ${({ left }) => (left ? 'left' : 'center')};

  :nth-child(2n) {
    background-color: ${colors.greyBlue};
  }
`;

export default StyledRegion;
