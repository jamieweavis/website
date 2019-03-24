import styled from 'styled-components';

export default styled.p`
  font-family: 'Lato';
  font-size: 52px;
  padding: 0 100px;
  z-index: 1;
  letter-spacing: -0.3px;
  color: #fefefe;

  @media only screen and (max-width: 512px) {
    font-size: 40px;
    padding: 0 50px;
  }

  a {
    color: #fefefe;
    position: relative;
    text-decoration: none;
    transition: color 0.2s ease;
    white-space: nowrap;
    &:hover {
      color: #fd5c63;
    }
    &:after {
      content: ' ';
      height: 4px;
      background: #fd5c63;
      position: absolute;
      border-radius: 2px;
      left: -4px;
      right: -4px;
      bottom: -2px;
    }
  }
`;
