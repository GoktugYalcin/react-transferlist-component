export const LEFT_DATA = "TRANSFER_LIST/LEFT_DATA";
export const RIGHT_DATA = "TRANSFER_LIST/RIGHT_DATA";
export const LEFT_SELECTED = "TRANSFER_LIST/LEFT_SELECTED";
export const RIGHT_SELECTED = "TRANSFER_LIST/RIGHT_SELECTED";
export const SEARCH = "TRANSFER_LIST/SEARCH";
export const CHECK_STATES = "TRANSFER_LIST/CHECK_STATES";

// Search Update
export function updateSearch(status) {
  return {
    type: SEARCH,
    payload: {
      search: status,
    },
  };
}

export function updateSearchReducer(state = "", { type, payload }) {
  switch (type) {
    case SEARCH:
      return payload.search;
    default:
      return state;
  }
}

// Check States Update
export function updateCheckStates(status) {
  return {
    type: CHECK_STATES,
    payload: {
      checkStates: status,
    },
  };
}

export function updateCheckStatesReducer(state = "", { type, payload }) {
  switch (type) {
    case CHECK_STATES:
      return payload.checkStates;
    default:
      return state;
  }
}

// Left List Update
export function updateLeftList(status) {
  return {
    type: LEFT_DATA,
    payload: {
      leftData: status,
    },
  };
}

export function updateLeftListReducer(state = "", { type, payload }) {
  switch (type) {
    case LEFT_DATA:
      return payload.leftData;
    default:
      return state;
  }
}

// Right List Update
export function updateRightList(status) {
  return {
    type: RIGHT_DATA,
    payload: {
      rightData: status,
    },
  };
}

export function updateRightListReducer(state = "", { type, payload }) {
  switch (type) {
    case RIGHT_DATA:
      return payload.rightData;
    default:
      return state;
  }
}

// Left Selected Update
export function updateLeftSelected(status) {
  return {
    type: LEFT_SELECTED,
    payload: {
      leftSelected: status,
    },
  };
}

export function updateLeftSelectedReducer(state = "", { type, payload }) {
  switch (type) {
    case LEFT_SELECTED:
      return payload.leftSelected;
    default:
      return state;
  }
}

// Right Selected Update
export function updateRightSelected(status) {
  return {
    type: RIGHT_SELECTED,
    payload: {
      rightSelected: status,
    },
  };
}

export function updateRightSelectedReducer(state = "", { type, payload }) {
  switch (type) {
    case RIGHT_SELECTED:
      return payload.rightSelected;
    default:
      return state;
  }
}