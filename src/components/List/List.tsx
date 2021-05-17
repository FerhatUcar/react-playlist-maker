import React from "react";
import { ListComponent } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Song } from "../../types/song";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Loader } from "../../components";
import { RED_COLOR, SECONDARY_COLOR } from "../../style/config";

interface ListProps {
  onClick: (item: Song) => void;
  option?: "add" | "delete";
  data?: Song[];
  fetchMoreData?: any;
  hasMoreData?: boolean;
  infinite?: boolean;
}

export const ListChildren = ({
  data,
  onClick,
  option,
}: ListProps): JSX.Element => (
  <>
    {data &&
      data.map((item, index) => (
        <li key={index}>
          <span>
            {index + 1} — <b>{item.artist}</b> - {item.name}
          </span>
          {option && (
            <Button
              color={option === "delete" ? RED_COLOR : SECONDARY_COLOR}
              text={
                <FontAwesomeIcon icon={option === "add" ? faPlus : faTrash} />
              }
              onClick={() => onClick(item)}
            />
          )}
        </li>
      ))}
  </>
);

export const List = ({
  onClick,
  option,
  data,
  fetchMoreData,
  hasMoreData,
  infinite,
}: ListProps): JSX.Element => {
  return (
    <ListComponent data-testid="songs-list" id={infinite ? "scrollableDiv" : ""}>
      {infinite ? (
        <InfiniteScroll
          dataLength={data?.length!}
          next={fetchMoreData}
          hasMore={hasMoreData!}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
        >
          <ListChildren data={data} onClick={onClick} option={option} />
        </InfiniteScroll>
      ) : (
        <ListChildren data={data} onClick={onClick} option={option} />
      )}
    </ListComponent>
  );
};
