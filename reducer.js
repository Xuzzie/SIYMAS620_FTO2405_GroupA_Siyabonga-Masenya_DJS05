// This will  import action types from actions.js
import { ADD, SUBTRACT, RESET } from "./actions";

// Define the reducer function
// need to go over switch and case again
export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};
