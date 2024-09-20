// This will create variables for the actions required in our counter app
// Remember  actions will be encaspulated within this
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

// Action creators
export const addAction = () => ({ type: ADD });
export const subtractAction = () => ({ type: SUBTRACT });
export const resetAction = () => ({ type: RESET });
