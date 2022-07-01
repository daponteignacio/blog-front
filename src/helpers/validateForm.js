


export const validateForm = (values) => {
    const errors = {};
  
    if (!values.title) errors.title = "Requerido";
  
    if (!values.description) {
      errors.description = "Requerido";
    }
  
    if (!values.markdown) {
        errors.markdown = "Requerido";
    }
    return errors;
  };
  