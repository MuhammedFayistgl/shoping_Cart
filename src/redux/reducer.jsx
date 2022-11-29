import { createStore } from "redux";

const initialState = {
  valu: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ingrement":
      return {
        valu: state.valu + 1,
      };
    default:
      return {
        valu: state.valu - 1,
      };
  }
};

export const stre = createStore(reducer);
