import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field className={css.input} type="text" name="name" />
        </label>

        <label>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>

        <label>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
