import styled, { css } from "styled-components";
import { GUTTER_XL, GUTTER_XXL, SECONDARY_COLOR } from "../../style/config";

export const LoadingBase = css`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.5s infinite ease-in-out;
  animation: load7 1.5s infinite ease-in-out;
`;

export const LoadingDots = styled.div`
  ${LoadingBase};
  color: ${SECONDARY_COLOR};
  font-size: 10px;
  margin: ${GUTTER_XL} auto ${GUTTER_XXL} auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before,
  &:after {
    ${LoadingBase}
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }
  &:before {
    left: -2.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 2.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
