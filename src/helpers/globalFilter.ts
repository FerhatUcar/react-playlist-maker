import { Song } from "../types/song";

export const globalFilter = (props: Song[], text: string) => {
  let filteredArtist = [];
  text = text.toLowerCase();

  for (let i = 0, l = props.length; i < l; ++i) {
    if (props[i].artist.toLowerCase().includes(text)) {
      filteredArtist.push(props[i]);
    }
  }

  return filteredArtist;
};
