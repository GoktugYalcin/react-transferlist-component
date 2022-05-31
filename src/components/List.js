import React from "react";
import ListCheckAll from "./ListCheckAll";
import ListSearch from "./ListSearch";
import ListContainer from "./ListContainer";

const List = ({ isLeft }) => {
  return (
    <>
      <div className="transferlist__box">
        <ListCheckAll isLeft={isLeft} />
        <ListSearch isLeft={isLeft} />
        <ListContainer isLeft={isLeft} />
      </div>
    </>
  );
};

export default List;
