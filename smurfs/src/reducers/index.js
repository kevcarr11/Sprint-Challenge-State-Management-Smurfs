import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR } from "../actions"
import { truncate } from "fs";

const initialState = {
  smurf: null,
  isLoading: false,
  error: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURF_SUCCESS: 
    return {
      ...state, 
      smurf: action.payload,
      isLoading: false
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default: 
      return state;
  }
}
