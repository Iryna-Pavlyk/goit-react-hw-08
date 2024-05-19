import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
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
