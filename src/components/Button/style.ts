import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../style/config";

export const ButtonComponent = styled.button`
  display: block;
  background: ${SECONDARY_COLOR};
  min-width: 100px;
  color: ${PRIMARY_COLOR};
`;
