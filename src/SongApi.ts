import axios from "axios";
import { Song } from "./types/song";

const BASE_URL = "http://localhost:3004/songs/";
const PLAYLIST_URL = "http://localhost:3005/songs/";

/**
 * Get the full songs list
 */
export const getSongs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Get the full playlist from the user favorite
 */
export const getPlaylist = async () => {
  try {
    const res = await axios.get(PLAYLIST_URL);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Delete the song from the playlist
 * @param id
 */
export const deletePlaylistSong = (id: Song["id"]) => {
  axios
    .delete(PLAYLIST_URL + id)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err.message));
};

/**
 * Add song to playlist
 * @param item
 */
export const postSong = (item: Song) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(PLAYLIST_URL, item, config)
    .then((res) => console.log(res))
    .catch((err) => console.error(err.message));
};
