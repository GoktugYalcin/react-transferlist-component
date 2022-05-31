import React from "react";

import ListArrows from "./ListArrows";
import List from "./List";

const TransferList = () => {
  return (
    <div className="transferlist__outer">
      <List isLeft={true} />
      <ListArrows />
      <List isLeft={false} />
    </div>
  );
};

export default TransferList;
