import * as types from "../actions/actionTypes";
const initialState = { apiStatus: "... loading smurfs ...", smurfs: [] };
// [{"name":"Brainey","age":200,"height":"5cm","id":0}]
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.GOT_ERROR:
      return { ...state, apiStatus: JSON.stringify(action.payload) };
    case types.GET_SMURFS:
      return { ...state, apiStatus: "... loading smurfs ..." };
    case types.GOT_SMURFS:
      return { ...state, apiStatus: "", smurfs: action.payload.smurfs };
    case types.ADD_SMURF:
      return { ...state, apiStatus: "adding new smurf" };
    case types.ADDED_SMURF:
      return {
        ...state,
        apiStatus: "",
        smurfs: action.payload,
      };
    case types.DELETE_SMURF:
      return { ...state, apiStatus: "deleting smurf" };
    case types.DELETED_SMURF:
      return { ...state, apiStatus: "", smurfs: action.payload };
    default:
      return state;
  }
}
