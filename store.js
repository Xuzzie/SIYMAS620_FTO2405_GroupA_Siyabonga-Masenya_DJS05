// Import the reducer from redicers.js 
import { counterReducer } from './reducer';

// Create the store factory function
export const createStore = (reducer) => {
    let state;
    let listeners = [];

    // This will return the current state
    const getState = () => state;

        // Dispatch an action and update the state
        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener()); // Notify all subscribers
        };
    
        //  This subscribes to state changes  // chat gpt here 
        const subscribe = (listener) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener); // Unsubscribe if necessary
            };
        };
    

