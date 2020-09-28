import * as types from "./actionTypes";
import axios from "axios";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: types.GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then((r) => {
      dispatch({ type: types.GOT_SMURFS, payload: { smurfs: r.data } });
    })
    .catch((e) => dispatch({ type: types.GOT_ERROR, payload: e }));
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: types.ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs/", smurf)
    .then((r) => {
      dispatch({ type: types.ADDED_SMURF, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GOT_ERROR, payload: e.response.data.Error });
    });
};

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then((r) => {
      dispatch({ type: types.DELETED_SMURF, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GOT_ERROR, payload: e.response.data.Error });
    });
};
