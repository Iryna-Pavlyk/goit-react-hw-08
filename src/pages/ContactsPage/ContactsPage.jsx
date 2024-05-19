import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <h3 className={css}>My contacts</h3>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
