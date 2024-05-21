import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((response) => {
        toast.success("Success!");
        console.log(response);
      })
      .catch((error) => {
        toast.error("Error!");
        console.log(error.message);
      });

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
      <Form className={css.form}>
        <h2 className={css.title}>Please log in</h2>
        <div className={css.inputWrapper}>
          <label className={css.labelEmail}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>

          <label className={css.labelPassw}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
        </div>

        <div className={css.btnWrapper}>
          <button className={css.btn} type="submit">
            Log in
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
