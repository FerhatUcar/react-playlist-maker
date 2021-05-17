import styled from "styled-components";
import { GUTTER, RED_DARK_COLOR } from "../../style/config";
import { flex } from "../../style/globalStyle";

export const AlertBlock = styled.div`
  ${flex};
  justify-content: space-between;
  width: 100%;
  background: ${RED_DARK_COLOR};
  padding: ${GUTTER};
  margin-bottom: ${GUTTER};

  svg {
    cursor: pointer;
  }
`;
