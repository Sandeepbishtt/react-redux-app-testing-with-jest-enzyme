import { types } from "../../Actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
