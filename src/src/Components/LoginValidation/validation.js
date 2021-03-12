const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password1) {
    errors.password1 = "Password is required.";
  } else if (values.password1.length < 5) {
    errors.password1 = "Password must be more than five characters.";
  }

  return errors;
};

export default validation;
