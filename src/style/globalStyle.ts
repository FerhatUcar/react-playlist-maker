import styled, { css } from "styled-components";
import {
  GUTTER_XL,
  GUTTER,
  BACKGROUND_COLOR,
  BOX_SHADOW_XL,
  TRANSITION,
} from "./config";
import { breakpoints } from "../helpers/breakpoints";

export interface ExpandProps {
  expand?: boolean;
}

export const flex = css`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const box = css`
  display: block;
  width: 100%;
  padding: ${GUTTER};
  background: ${BACKGROUND_COLOR};
  box-shadow: ${BOX_SHADOW_XL};
  border: solid 1px #393939;
  margin-bottom: ${GUTTER_XL};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 760px;
  color: white;
  padding: ${GUTTER};
  height: 100%;

  
  button:hover {
    svg {
      transition: ${TRANSITION};
      transform: translateY(-3px);
    }
  }

  ${breakpoints("width", "", [{ 760: "100%" }], "max-width")};
`;

export const Logo = styled.img`
  display: block;
  height: 70px;
  margin-right: ${GUTTER};
`;

export const Playlist = styled.div`
  ${box};
`;

export const FullList = styled.div`
  ${box};
`;

export const BoxHeader = styled.div`
  ${flex};
  justify-content: space-between;
  margin: 0 0 ${GUTTER} 0;
  
  svg {
    cursor: pointer;
  }

  div > svg {
    cursor: unset;
  }
  
  span {
    margin-right: 0.5rem;
  }
`;

export const Layout = styled.div<ExpandProps>`
  display: block;
  transition: ${TRANSITION};
  ${({ expand }) =>
    expand &&
    `
    transform: translateX(-300px);
  `}
`;
