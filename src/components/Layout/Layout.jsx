import css from "./Layout.module.css";
import Navigation from "../../components/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <h3 className={css}>Layout</h3>
      <Navigation />
    </>
  );
};

export default Layout;
