import css from "./Layout.module.css";
import AppBar from "../../components/AppBar/AppBar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className={css.wrap}>
      <AppBar />
      <section className={css.section}>{children}</section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
