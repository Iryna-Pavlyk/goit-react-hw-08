import css from "./Layout.module.css";
import AppBar from "../../components/AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div className={css.wrap}>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;
