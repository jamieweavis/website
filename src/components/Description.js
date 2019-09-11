import styled from 'styled-components';

export default styled.p`
  font-family: 'Lato';
  font-size: 52px;
  padding: 0 100px;
  z-index: 1;
  letter-spacing: -0.3px;

  @media only screen and (max-width: 512px) {
    font-size: 40px;
    padding: 0 50px;
  }

  a {
    color: #fff;
    position: relative;
    text-decoration: none;
    transition: color 0.2s ease;
    white-space: nowrap;
    &:hover {
      color: #00d1c3;
    }
    &:after {
      content: ' ';
      height: 4px;
      background: #00d1c3;
      position: absolute;
      border-radius: 2px;
      left: -4px;
      right: -4px;
      bottom: -2px;
    }
  }
`;
