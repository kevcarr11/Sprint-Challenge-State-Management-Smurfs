export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export function addNewSmurf(smurf) {
  return dispatch => {
    dispatch({ type: ADD_NEW_SMURF, payload: smurf });
  }
}