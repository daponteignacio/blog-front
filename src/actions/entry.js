import Swal from "sweetalert2";
import { types } from "../types/types";
import {
  fetchGet,
  fetchDeletEntry,
  fetchCreateEntry,
  fetchUpdateEntry,
} from "../helpers/fetchEntry";


export const createEntry = (entry = {}) => {
  return async (dispatch) => {



    const resp = await fetchCreateEntry("blog/new-entry", entry);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.getAllEntries,
        payload: body.entries,
      });
      Swal.fire("Todo listo", "Tu artículo se creó correctamente", "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getAllEntries = () => {
  return async (dispatch) => {
    const resp = await fetchGet(`blog`);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.getAllEntries,
        payload: body.entries,
      });
    }
  };
};

export const getOneEntry = (id) => {
  return async (dispatch) => {
    const resp = await fetchGet(`blog/${id}`);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.getOneEntry,
        payload: body.entry,
      });

    }
  };
};

export const updateEntry = (entryUpdated = {}, id = '') => {
  return async (dispatch) => {
    const resp = await fetchUpdateEntry(
      `blog/${id}`,
      entryUpdated
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.getAllEntries,
        payload: body.entries,
      });
      Swal.fire("Todo listo", "Tu artículo se editó correctamente", "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const deleteEntry = (id) => {
  return async (dispatch) => {
    const resp = await fetchDeletEntry(`blog/${id}`);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.getAllEntries,
        payload: body.entries,
      });
      Swal.fire("Eliminado", "Tu artículo se eliminó correctamente", "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
