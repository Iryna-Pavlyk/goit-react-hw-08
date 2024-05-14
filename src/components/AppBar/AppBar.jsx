import css from "./AppBar.module.css";
import Navigation from "../../components/Navigation/Navigation";
import AuthNav from "../../components/AuthNav/AuthNav";
import UserMenu from "../../components/UserMenu/UserMenu";

const AppBar = () => {
  return (
    <header>
      <h3 className={css}>AppBar</h3>
      <Navigation />
      {<UserMenu /> || <AuthNav />}
    </header>
  );
};

export default AppBar;
