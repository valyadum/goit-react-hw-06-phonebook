
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'store/store';
import css from './ContactList.module.css';




const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
   
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {filteredContacts.length > 0 && (
        <ul className={css.ul}>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <li key={id} className={css.li}>
                {name}: {number}
                <button
                  className={css.button}
                  type="button"
                  onClick={() => {
                    dispatch(deleteContacts(id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ContactList