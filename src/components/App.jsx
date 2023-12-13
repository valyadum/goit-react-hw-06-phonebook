
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';


export default function App() {

  return (
    <>
      <div className={css.item}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.item}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList  />
      </div>
    </>
  );
}

