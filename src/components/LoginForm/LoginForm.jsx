import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
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
