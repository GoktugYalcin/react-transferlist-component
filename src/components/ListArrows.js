import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons/faChevronLeft";
import { faChevronsRight } from "@fortawesome/pro-solid-svg-icons/faChevronsRight";
import { faChevronsLeft } from "@fortawesome/pro-solid-svg-icons/faChevronsLeft";
import { updateRightList, updateLeftList, updateRightSelected, updateLeftSelected } from "../modules/transferListReducer";

const ListArrows = () => {
    const dispatch = useDispatch();

    const leftData = useSelector((store) => store.leftData);
    const rightData = useSelector((store) => store.rightData);
    const leftSelected = useSelector((store) => store.leftSelected);
    const rightSelected = useSelector((store) => store.rightSelected);

    const [searchStates, setSearchStates] = useState({ left: "", right: "" });
    const [checkAllStates, setCheckAllStates] = useState({
      left: false,
      right: false,
    });

    const uncheckLeftAll = () => {
        if (leftSelected.length === leftData.length && leftData.length) {
          setCheckAllStates({ ...checkAllStates, left: true });
        }
        if (!leftSelected.length) {
          setCheckAllStates({ ...checkAllStates, left: false });
        }
      };

    useEffect(() => {
      if (leftSelected.length === leftData.length && leftData.length) {
        uncheckLeftAll();
      }
    }, [leftSelected, leftData]);
    
    const uncheckRightAll = () => {
      if (rightSelected.length === rightData.length && rightData.length) {
        setCheckAllStates({ ...checkAllStates, right: true });
      }
      if (!rightSelected.length) {
        setCheckAllStates({ ...checkAllStates, right: false });
      }
    };

    useEffect(() => {
      if (leftSelected.length === leftData.length && leftData.length) {
        uncheckRightAll();
      }
    }, [rightData, rightSelected]);

    const checkToLeft = () => {
      dispatch(
        updateRightList(rightData.filter((item) => !rightSelected.includes(item)))
      );
      setSearchStates({ ...searchStates, right: "" });
      dispatch(updateLeftList([...leftData, ...rightSelected]));
      dispatch(updateRightSelected([]));
    };
  
    const checkToRight = () => {
      dispatch(
        updateLeftList(leftData.filter((item) => !leftSelected.includes(item)))
      );
      setSearchStates({ ...searchStates, left: "" });
      dispatch(updateRightList([...rightData, ...leftSelected]));
      dispatch(updateLeftSelected([]));
    };
  
    const checkAllToLeft = () => {
      dispatch(updateLeftList([...leftData, ...rightData]));
      dispatch(updateRightList([]));
      dispatch(updateRightSelected([]));
    };
  
    const checkAllToRight = () => {
      dispatch(updateRightList([...rightData, ...leftData]));
      dispatch(updateLeftList([]));
      dispatch(updateLeftSelected([]));
    };

    //Dynamic Styles
    const allToRightStyles = classNames("transferlist__container-arrows_item", {
        "transferlist__container-arrows_disabled": !leftData.length,
    });
    const toRightStyles = classNames("transferlist__container-arrows_item", {
        "transferlist__container-arrows_disabled": !leftSelected.length,
    });
    const allToLeftStyles = classNames("transferlist__container-arrows_item", {
        "transferlist__container-arrows_disabled": !rightData.length,
    });
    const toLeftStyles = classNames("transferlist__container-arrows_item", {
        "transferlist__container-arrows_disabled": !rightSelected.length,
    });


    return <div className="transferlist__container-arrows">
              <div
                  className={allToRightStyles}
                  onClick={(e) => {
                  leftData.length && checkAllToRight();
                  }}
              >
                  <FontAwesomeIcon icon={faChevronsRight} />
              </div>
              <div
                  className={toRightStyles}
                  onClick={(e) => {
                  leftSelected.length && checkToRight();
                  }}
              >
                  <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div
                  className={toLeftStyles}
                  onClick={(e) => {
                  rightSelected.length && checkToLeft();
                  }}
              >
                  <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div
                  className={allToLeftStyles}
                  onClick={(e) => {
                  rightData.length && checkAllToLeft();
                  }}
              >
                  <FontAwesomeIcon icon={faChevronsLeft} />
              </div>
            </div>
}

export default ListArrows;