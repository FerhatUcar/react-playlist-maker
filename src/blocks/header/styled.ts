import styled from "styled-components";
import {GUTTER, PRIMARY_COLOR, SECONDARY_COLOR, TRANSITION} from "../../style/config";
import { flex } from "../../style/globalStyle";

export const HeaderBlock = styled.div`
  ${flex};
  width: 100%;
  background: ${PRIMARY_COLOR};
  height: 100px;
  color: #d9d9d9;
  padding: ${GUTTER};
  justify-content: space-between;

  h1 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 800;
  }

  button:hover {
    svg {
      transition: ${TRANSITION};
      transform: translateY(-3px);
    }
  }
`;

export const LogoBlock = styled.div`
  ${flex};
  width: 80%;
`

export const MenuBlock = styled.div`
  margin-right: ${GUTTER};
`

export const MenuIcon = styled.button`
  border: 0;
  padding: 10px;
  cursor: pointer;
  background: ${SECONDARY_COLOR};
`
