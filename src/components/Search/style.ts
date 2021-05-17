import styled from "styled-components";
import { TRANSITION } from "../../style/config";

export const SearchComponent = styled.input.attrs({
  type: "input",
  placeholder: "Search artist..",
})`
  width: 200px;
  display: block;
  padding: 5px;
  background: none;
  border: 0;
  border-bottom: solid 1px grey;
  outline: 0;
  color: white;
  transition: ${TRANSITION};

  &:focus {
    border-bottom: solid 1px white;
  }
`;
