import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
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
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Register your account</h2>
        <div className={css.inputWrapper}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
          </label>

          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>

          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
        </div>

        <div className={css.btnWrapper}>
          <button className={css.btn} type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
