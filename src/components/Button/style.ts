import styled from "styled-components";
import {
  BOX_SHADOW,
  GUTTER,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TRANSITION,
} from "../../style/config";
import { LightenDarkenColor } from "../../helpers/lightenColor";
import { breakpoints } from "../../helpers/breakpoints";

export const ButtonComponent = styled.button`
  display: block;
  background: ${(props) => (props.color ? props.color : SECONDARY_COLOR)};
  color: ${PRIMARY_COLOR};
  padding: ${GUTTER};
  font-weight: bolder;
  cursor: pointer;
  transition: ${TRANSITION};
  text-transform: uppercase;
  border: 0;
  position: relative;
  z-index: 3;
  ${breakpoints("width", "", [{ 760: "100%" }], "max-width")};

  &:hover {
    background: ${(props) =>
      LightenDarkenColor(props.color ? props.color : SECONDARY_COLOR, 20)};
    box-shadow: ${BOX_SHADOW};
  }

  &:active {
    background: ${SECONDARY_COLOR};
    box-shadow: none;
  }
`;
