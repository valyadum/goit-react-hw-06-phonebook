import React, {  useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem('contactsKey');
    const contactsParse = JSON.parse(data);
    if (contactsParse) {
     return (contactsParse);
    }
    else {return [] }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('contactsKey');
    const contactsParse = JSON.parse(data);
    if (contactsParse) {
      setContacts([...contactsParse]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsKey', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      name: name,
      number: number,
      id: `id-` + nanoid(),
    };
    return contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contact`)
      : setContacts([newContact, ...contacts]);
  };

 

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

