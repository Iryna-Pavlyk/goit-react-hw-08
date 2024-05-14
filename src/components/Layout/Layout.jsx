import css from "./Layout.module.css";
import AppBar from "../../components/AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <h3 className={css}>Layout</h3>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
