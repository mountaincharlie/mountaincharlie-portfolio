import { createContext, useReducer } from "react";

const initialState = {
  defaultPositions: true,  // for resetting the positions after dragging items
};

function reducer (state, action) {
  switch (action.type) {
    case "SET_DEFAULT_POSITIONS":
      return { ...state, defaultPositions: action.payload };
    // default
    default:
      return state;
  }
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDefaultPositions = (payload) => {
    dispatch({ type: "SET_DEFAULT_POSITIONS", payload });
  };

  // functions (including set state and all the complete current state) to pass to all components wrapped in the context
  const value = {
    ...state,
    setDefaultPositions,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
