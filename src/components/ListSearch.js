import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons/faMagnifyingGlass";
import { updateSearch } from "../modules/transferListReducer";

const ListSearch = ({isLeft}) => {
    const dispatch = useDispatch();
    const leftData = useSelector((store) => store.leftData);
    const rightData = useSelector((store) => store.rightData);
    const search = useSelector((store) => store.search);

    const searchState = isLeft ? search.left : search.right;
    const data = isLeft ? leftData : rightData;

    return <div className="transferlist__search">
                <input
                    className="transferlist__search-input"
                    placeholder="Search..."
                    value={searchState}
                    disabled={!data.length}
                    type="text"
                    onChange={(e) => {

                        dispatch(updateSearch(isLeft ? { ...search, left: e.target.value } : { ...search, right: e.target.value }));
                    }}
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="transferlist__search-icon"
                />
            </div>
}

export default ListSearch;