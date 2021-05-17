import React from "react";
import { SearchComponent } from "./style";
import { EventInputType } from "../../style/config";

interface SearchType {
  filter: (event: EventInputType) => void;
}

export const Search = ({ filter }: SearchType): JSX.Element => {
  return <SearchComponent onChange={(e) => filter(e)} />;
};
