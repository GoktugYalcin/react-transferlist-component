import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLeftSelected,
  updateRightSelected,
} from "../modules/transferListReducer";

const ListItem = ({ Item, isFirstList }) => {
  const dispatch = useDispatch();
  const leftData = useSelector((store) => store.leftData);
  const rightData = useSelector((store) => store.rightData);

  const leftSelected = useSelector((store) => store.leftSelected);
  const rightSelected = useSelector((store) => store.rightSelected);
  const selectedData = isFirstList ? leftSelected : rightSelected;

  const notAllowedControl = (isFirstList) => {
    if (isFirstList) {
      return (
        leftSelected.filter(
          (i) => i.label === Item.label
        ).length ||
        rightData.filter(
          (i) => i.label === Item.label
        ).length
      );
    } else {
      return (
        rightSelected.filter(
          (i) => i.label === Item.label
        ).length ||
        leftData.filter(
          (i) => i.label === Item.label
        ).length
      );
    }
  };
  const listRevise = (e) => {
    const sideSelected = isFirstList ? updateLeftSelected : updateRightSelected;
    const selectedData = isFirstList ? leftSelected : rightSelected;
    const checked = e.target.checked;
    if (notAllowedControl(true)) {
      dispatch(
        sideSelected(selectedData.filter((item) => item.value !== Item.value))
      );
      return true;
    }
    if (checked) {
      dispatch(sideSelected([...selectedData, Item]));
    } else {
      dispatch(sideSelected(selectedData.filter((item) => item !== Item)));
    }
  };

  const toggleSelected = (Item) => {
    if (isFirstList) {
      if (notAllowedControl(true)) {
        dispatch(
          updateLeftSelected(
            leftSelected.filter((item) => item.value !== Item.value)
          )
        );
        return true;
      }
      if (!leftSelected.includes(Item)) {
        dispatch(updateLeftSelected([...leftSelected, Item]));
      } else {
        dispatch(
          updateLeftSelected([...leftSelected.filter((i) => i !== Item)])
        );
      }
    } else {
      if (notAllowedControl(false)) {
        dispatch(
          updateRightSelected(
            rightSelected.filter((item) => item.value !== Item.value)
          )
        );
        return true;
      }
      if (!rightSelected.includes(Item)) {
        dispatch(updateRightSelected([...rightSelected, Item]));
      } else {
        dispatch(
          updateRightSelected([...rightSelected.filter((i) => i !== Item)])
        );
      }
    }
  };

  return (
    <div
      className="listitem__container"
      onClick={() => {
        toggleSelected(Item);
      }}
    >
      <input
        onChange={(e) => listRevise(e)}
        type="checkbox"
        checked={selectedData.includes(Item)}
      />
      <p>{Item.label}</p>
    </div>
  );
};

export default ListItem;
