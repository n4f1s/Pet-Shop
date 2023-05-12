import React, { createContext, useContext, useReducer} from 'react';

// Prepare the dataLayer
export const StateContext = createContext();

//Wrape our App and provide the Data layer
export const StateProvider = ({ reducer, initailState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initailState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const UseStateValue = () => useContext(StateContext);