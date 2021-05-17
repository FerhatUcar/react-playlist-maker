import styled from "styled-components";
import {
  GUTTER,
  GUTTER_XL,
  PRIMARY_COLOR,
  TRANSITION,
} from "../../style/config";
import { LightenDarkenColor } from "../../helpers/lightenColor";
import { flex } from "../../style/globalStyle";
import {breakpoints} from "../../helpers/breakpoints";

export const ListComponent = styled.ul`
  display: block;
  background: ${PRIMARY_COLOR};
  list-style-type: none;
  margin-top: 0;
  width: 100%;
  padding: 0;
  height: 300px;
  overflow-y: scroll;

  button {
    opacity: 0;
  }

  li {
    ${flex};
    justify-content: space-between;
    transition: ${TRANSITION};
    padding: ${GUTTER};
    position: relative;
    z-index: 2;

    &:nth-child(even) {
      background: #383838;
    }

    ${breakpoints("align-items", "", [{760: "flex-start"}], "max-width")};
    ${breakpoints("flex-direction", "", [{760: "column"}], "max-width")};


    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      ${breakpoints("margin-bottom", "", [{760: GUTTER}], "max-width")};
    }

    &:hover {
      background: ${LightenDarkenColor(PRIMARY_COLOR, 10)};
      padding-left: ${GUTTER_XL};

      ${breakpoints("padding-left", "", [{760: GUTTER}], "max-width")};

      button {
        opacity: 1;
      }
    }
  }
`;
