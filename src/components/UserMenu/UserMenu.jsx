import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrap}>
      <p className={css.text}>
        Welcome, <span className={css.name}> {user.name}</span>
      </p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
