import css from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  return (
    <>
      <h3 className={css.title}>
        Welcome, to <span className={clsx(css.span, css.titleRed)}>My</span>
        <span className={clsx(css.span, css.titleViolet)}>Hand</span>
        <span className={clsx(css.span, css.titleOrange)}>Book</span>!
      </h3>
      <div className={css.wrapText}>
        <p className={css.text}>
          This is an app for quickly adding and searching for your contacts. All
          you need is to register and enjoy access to your contact book.
        </p>
        <h4 className={css.titleList}>Organize and update your contacts</h4>
        <ul className={css.list}>
          <li>View contacts by account (for example, work or personal)</li>
          <li>Easily add contacts</li>
        </ul>
        <h4 className={css.titleList}>Easy access</h4>
        <ul className={css.list}>
          <li>
            Access your contacts from any device you`re signed in to, including
            your new phone
          </li>
        </ul>
        <h4 className={css.titleList}>Easy search for contacts by name</h4>
      </div>
    </>
  );
};

export default HomePage;
