import css from "./Layout.module.css";
import AppBar from "../../components/AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div className={css.wrap}>
      <AppBar />
      <section className={css.section}>{children}</section>
    </div>
  );
};

export default Layout;
