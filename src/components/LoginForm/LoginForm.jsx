import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    // Toast
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>

        <label>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
