import styled from "styled-components";
import {BACKGROUND_COLOR, GUTTER, PRIMARY_COLOR, TRANSITION} from "../../style/config";
import { ExpandProps } from "../../style/globalStyle";

export const ExpandMenuBlock = styled.div<ExpandProps>`
  display: block;
  background: ${BACKGROUND_COLOR};
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  z-index: 5;
  color: white;
  text-align: center;
  transition: ${TRANSITION};
  transform: translateX(300px);
  ${({ expand }) =>
    expand &&
    `
    transform: translateX(0px);
  `}
  
  hr {
    border-color: ${PRIMARY_COLOR};
    margin: 0;
  }
  
  button {
    font-weight: 600;
    display: block;
    width: 100%;
    padding: ${GUTTER};
    border: 0;
    cursor: pointer;
    transition: ${TRANSITION};
    background: none;
    color: white;
    
    &:hover {
      background: ${PRIMARY_COLOR};
    }
  }
`;
