// Import the reducer from redicers.js 
import { counterReducer } from './reducer';

// Create the store factory function
export const createStore = (reducer) => {
    let state;
    let listeners = [];

    // This will return the current state
    const getState = () => state;

