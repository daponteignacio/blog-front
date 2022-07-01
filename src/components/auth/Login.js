import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { getAllEntries } from "../../actions/entry";
import { useFormik } from "formik";
import { validateLoginForm } from "../../helpers/validateLoginForm";

export const Login = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleLogin = (values) => {
    dispatch(
      startLogin(values.email, values.password, () => {
        dispatch(getAllEntries());
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "daponteignacio1@gmail.com",
      password: "123456",
    },
    validate: validateLoginForm,
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="auth__container"
    >
      <div className="form-group mb-4">
        <label className="form__label" htmlFor="email">
          Correo
        </label>
        <input
          className="form-control form__input"
          id="email"
          type="text"
          {...formik.getFieldProps("email")}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red", marginTop: "15px" }}>
            {formik.errors.email}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="form-group mb-4">
        <label className="form__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="form-control form__input"
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red", marginTop: "15px" }}>
            {formik.errors.password}
          </div>
        ) : (
          <></>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
    </form>
  );
};
