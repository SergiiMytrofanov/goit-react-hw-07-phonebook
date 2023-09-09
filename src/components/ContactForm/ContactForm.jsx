import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux'; 
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const contacts = useSelector((state) => state.contacts.contacts);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setName('');
    setNumber('');


    const updatedContacts = [...contacts, newContact];
    saveContactsToLocalStorage(updatedContacts);
  };

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };


  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input
        className={styles.contactFormInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯёЁіІїЇєЄ ])?[a-zA-Zа-яА-ЯёЁіІїЇєЄ]*)*$"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
        required
        placeholder="Ім'я та Прізвище"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className={styles.contactFormInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Номер телефону повинен складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
        required
        placeholder="+000 000 000 00 00"
        value={number}
        onChange={handleNumberChange}
      />
      <button className={styles.contactFormButton} type="submit">Додати контакт</button>
    </form>
  );
};

export default ContactForm;
