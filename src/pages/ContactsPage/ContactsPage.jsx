import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <h3 className={css}>My contacts</h3>
      <ContactForm />
    </>
  );
};

export default ContactsPage;
