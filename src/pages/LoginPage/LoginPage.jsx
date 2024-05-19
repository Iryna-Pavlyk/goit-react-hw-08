import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <h2 className={css}>Please log in</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;
