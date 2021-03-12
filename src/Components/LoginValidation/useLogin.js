import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useForm = (validates) => {
  const [values, setValues] = useState({
    email: "",
    password1: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const history = useHistory();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //handling errors
    setErrors(validates(values));
    setIsSubmitting(true);
    //Setting input to initiial state
    console.log(values);
  };

  useEffect(() => {
    /// check to see if there are no errors
    // and if there are no errors  then i called my callback
    if (Object.keys(errors).length === 0 && isSubmitting) {
      fetch("https://mnte.herokuapp.com/api/v1/users/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            history.push("/Signupflow");
            const token = data.accessToken;
            console.log(token);
            localStorage.setItem("token", token);
          } else {
            alert("There is an error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [errors, values, isSubmitting, history]);

  return {
    handleChange,
    handleFormSubmit,
    values,
    errors,
  };
};
export default useForm;
