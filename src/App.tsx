import React, { useCallback, useEffect, useState } from "react";
import "./assets/scss/App.scss";
import {
  Container,
  Playlist,
  BoxHeader,
  FullList,
  Layout,
} from "./style/globalStyle";
import { List, Search, Loader, Alert } from "./components";
import { EventInputType, RED_COLOR } from "./style/config";
import { Header, Menu } from "./blocks";
import { globalFilter } from "./helpers/globalFilter";
import { Song } from "./types/song";
import { deletePlaylistSong, getPlaylist, getSongs, postSong } from "./songs";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = (): JSX.Element => {
  const [expand, setExpand] = useState(false);
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [playlistComponent, setPlaylistComponent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState(false);

  useEffect(() => {
    setLoading(true);

    getSongs().then((data: Song[]) => {
      setSongs(data.slice(0, 5));
      setLoading(false);
    });
  }, [setLoading]);

  useEffect(() => {
    getPlaylist().then((data: Song[]) => setPlaylist(data));
  }, []);

  const filter = useCallback(
    (e: EventInputType) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleDelete = useCallback(
    ({ id }: Song) => {
      deletePlaylistSong(id);

      const newPlaylistSongs = playlist.filter((song) => song.id !== id);
      setPlaylist(newPlaylistSongs);
    },
    [playlist]
  );

  const addSongToPlaylist = useCallback(
    (item: Song) => {
      for (let i = 0; i < playlist.length; i++) {
        if ([item.id].includes(playlist[i].id)) {
          return setAlreadyAdded(true);
        }
      }

      postSong(item);
      setPlaylist((playlist) => [...playlist, item]);

      const newSongs = songs.filter((song) => song.id !== item.id);
      setSongs(newSongs);
      setAlreadyAdded(false);
    },
    [setPlaylist, setSongs, songs, playlist, setAlreadyAdded]
  );

  const closeAlert = useCallback(() => {
    setAlreadyAdded(false);
    setAlreadyExist(false);
  }, [setAlreadyAdded, setAlreadyExist]);

  const openMenu = useCallback(() => setExpand(!expand), [setExpand, expand]);

  const fetchMoreSongs = () => {
    setTimeout(() => {
      getSongs().then((data: Song[]) => {
        setSongs(data.slice(0, songs.length + 5));
      });
    }, 1000);
  };

  const addPlaylist = useCallback(() => {
    if (playlistComponent) {
      setExpand(false);
      return setAlreadyExist(true);
    }

    setPlaylistComponent(true);
  }, [setPlaylistComponent, setAlreadyExist, playlistComponent, setExpand]);

  return (
    <>
      <Layout expand={expand}>
        <Header openMenu={openMenu} expanded={expand} />
        <Container>
          {alreadyAdded && (
            <Alert
              text="Song already added to your playlist!"
              closeAlert={closeAlert}
            />
          )}
          {alreadyExist && (
            <Alert
              text="Playlist has already been created"
              closeAlert={closeAlert}
            />
          )}
          {playlistComponent && (
            <Playlist>
              <BoxHeader>
                <div>
                  <span>Playlist</span>
                  <FontAwesomeIcon color={RED_COLOR} icon={faHeart} />
                </div>
              </BoxHeader>
              <List
                infinite={false}
                onClick={handleDelete}
                data={playlist}
                option="delete"
              />
            </Playlist>
          )}

          <FullList>
            <BoxHeader>
              <span>Full list</span>
              <Search filter={filter} />
            </BoxHeader>
            {loading ? (
              <Loader />
            ) : (
              songs && (
                <List
                  infinite
                  fetchMoreData={fetchMoreSongs}
                  hasMoreData
                  option="add"
                  data={globalFilter(songs, search).map((item) => item)}
                  onClick={addSongToPlaylist}
                />
              )
            )}
          </FullList>
        </Container>
      </Layout>
      <Menu playlist={addPlaylist} expand={expand} />
    </>
  );
};

export default App;
