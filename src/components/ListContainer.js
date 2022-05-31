import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";
import {
  updateRightList,
  updateLeftList,
} from "../modules/transferListReducer";
import ListItem from "./ListItem";

const ListContainer = ({ isLeft }) => {
  const dispatch = useDispatch();

  const leftData = useSelector((store) => store.leftData);
  const rightData = useSelector((store) => store.rightData);
  const search = useSelector((store) => store.search);

  const data = isLeft ? leftData : rightData;
  const searchState = isLeft ? search.left : search.right;
  const updatedData = isLeft ? updateLeftList : updateRightList;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(updatedData(arrayMove(data, oldIndex, newIndex)));
    return true;
  };

  const searchOnData = (data, searchText) => {
    const search = data.filter(
      (item) =>
        item["label"]
          .toLowerCase()
          .search(searchText.toLowerCase()) > -1
    );
    return search;
  };

  const SortableContainer = sortableContainer(({ children }) => {
    return <div className="transferlist__container">{children}</div>;
  });

  const SortableItem = sortableElement(({ value }) => (
    <ListItem Item={value.dataItem} isFirstList={value.isFirstList} />
  ));

  return (
    <SortableContainer distance={1} onSortEnd={onSortEnd}>
      {searchOnData(data, searchState).map((dataItem, index) => {
        return (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={{ dataItem, index, isFirstList: isLeft }}
          />
        );
      })}
    </SortableContainer>
  );
};

export default ListContainer;
