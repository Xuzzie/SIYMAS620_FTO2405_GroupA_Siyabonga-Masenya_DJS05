import { createStore } from "./store";
import { addAction, subtractAction, resetAction } from "./actions";
import { counterReducer } from "./reducer";

//  This will create the store using the counter reducer
const store = createStore(counterReducer);

// This will show updates  to store updates
store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

// Log the initial state
console.log("Initial state:", store.getState());

// Dispatch some actions
store.dispatch(addAction()); // count: 1
store.dispatch(addAction()); // count: 2
store.dispatch(subtractAction()); // count: 1
store.dispatch(resetAction()); // count: 0
