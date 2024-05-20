import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { MdPeopleAlt, MdOutlinePhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.name}>
          <MdPeopleAlt className={css.icon} size={26} />
          {name}
        </p>
        <p className={css.text}>
          <MdOutlinePhoneInTalk className={css.icon} size={26} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
