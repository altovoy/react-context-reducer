import { useReducer } from "react";
import ACTIONS from "../actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const ACTIONS_REDUCER = {
  [ACTIONS.SET_USER]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [ACTIONS.SET_AUTHENTICATED]: (state, action) => ({
    ...state,
    isAuthenticated: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCER[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

const AuthReducer = () => useReducer(reducer, initialState); // TODO: Find a better way to do this, i'm not sure if this is completly correct

export default AuthReducer;
