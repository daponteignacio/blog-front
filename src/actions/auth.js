import Swal from "sweetalert2";
import { types } from "../types/types";
import {
  fetchStartChecking,
  fetchStartLogin,
  fetchStartRegister,
  fetchStartUpdate,
} from "../helpers/fetchAuth";

export const startLogin = (email, password, cb) => {
  return async (dispatch) => {
    const resp = await fetchStartLogin("auth", { email, password });
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch({
        type: types.authLogin,
        payload: {
          uid: body.uid,
          name: body.name,
          surname: body.surname,
        },
      });

      cb();
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchStartRegister("auth/new", {
      email,
      password,
      name,
      // !agregar surname
    });
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch({
        type: types.authStartRegister,
        payload: {
          uid: body.uid,
          name: body.name,
          surname: body.surname,
        },
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {

    const resp = await fetchStartChecking("auth/renew");
    const body = await resp.json();


    if (body.ok) {

      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch({
        type: types.authLogin,
        payload: {
          uid: body.uid,
          name: body.name,
        },
      });

    } else {
      dispatch({
        type: types.authCheckingFinish,
      });
    }
  };
};

export const startUpdate = (data = {}) => {
  return async (dispatch) => {

    console.log(data);
    const resp = await fetchStartUpdate("auth/update", data);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.authLogin,
        payload: {
          uid: body.uid,
          name: body.name,
          surname: body.surname,
        },
      });
    } else {
      Swal.fire("Errorrr", body.msg, "error");
    }
  };
};

//*
export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch({
      type: types.authLogout,
    });
  };
};
