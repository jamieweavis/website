import styled from 'styled-components';

import { colors } from '../styles/variables.css';

const StyledRegion = styled.section`
  padding: 5rem 0;
  background-color: ${colors.black};
  :nth-child(2n) {
    background-color: ${colors.greyBlue};
  }
  h2,
  p {
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default StyledRegion;
