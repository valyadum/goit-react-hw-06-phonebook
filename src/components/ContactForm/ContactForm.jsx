import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'store/store';
import css from './ContactForm.module.css'

export default function ContactForm(){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

 function handleChange (event){
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }
  
function onAddContact(event){
    event.preventDefault();
    dispatch(addContacts(name, number));
    reset();
  };
function reset() {
    setName('');
    setNumber('');
  };
   return (
     <div>
       <form className={css.form} onSubmit={onAddContact}>
         <label className={css.label}>
           <input
             placeholder="Name"
             className={css.input}
             type="text"
             value={name}
             name="name"
             onChange={handleChange}
             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             required
           />
         </label>
         <label className={css.label}>
           <input
             placeholder="Number"
             className={css.input}
             type="tel"
             name="number"
             value={number}
             required
             onChange={handleChange}
             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
           />
         </label>
         <button type="submit" className={css.buttonSubmit}>
           Add contact
         </button>
       </form>
     </div>
   );

}
