export const validateLoginForm = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Requerido";
    if (!values.password) errors.password = "Requerido";
    return errors;
  };
  