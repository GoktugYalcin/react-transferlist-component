import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckStates, updateLeftSelected, updateRightSelected } from "../modules/transferListReducer";

const ListCheckAll = ({isLeft}) => { 

    const dispatch = useDispatch();
    const leftData = useSelector((store) => store.leftData);
    const rightData = useSelector((store) => store.rightData);
    const leftSelected = useSelector((store) => store.leftSelected);
    const rightSelected = useSelector((store) => store.rightSelected);
    const checkStates = useSelector((store) => store.checkStates);

    const data = isLeft ? leftData : rightData;
    const selected = isLeft ? leftSelected : rightSelected;
    const updateSelected = isLeft ? updateLeftSelected : updateRightSelected;

    return <div className="transferlist__checkall">
                <input
                type="checkbox"
                checked={
                    checkStates.left && data.length === selected.length
                }
                disabled={!data.length}
                onChange={(e) => {
                    if (e.target.checked) {
                    dispatch(updateCheckStates({
                        ...checkStates,
                        left: true,
                    }));
                    dispatch(updateSelected(data));
                    } else {
                    dispatch(updateCheckStates({
                        ...checkStates,
                        left: false,
                    }));
                    dispatch(updateSelected([]));
                    }
                }}
                />
                <p>
                {selected.length
                    ? selected.length + "/" + data.length
                    : data.length}{" "}
                Item
                </p>
            </div>
}

export default ListCheckAll;