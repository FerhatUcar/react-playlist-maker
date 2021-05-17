import React from "react";
import { ExpandMenuBlock } from "./styled";

interface MenuProps {
  expand: boolean;
  playlist: () => void;
}

export const Menu = ({ expand, playlist }: MenuProps): JSX.Element => (
  <ExpandMenuBlock expand={expand}>
    <h3>Menu</h3>
    <hr/>
    <button onClick={playlist}>Add playlist</button>
  </ExpandMenuBlock>
);
