import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.wrap}>
      <p>Welcome, </p>
      <button type="button" onClick={() => {}}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
