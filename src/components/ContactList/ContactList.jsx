import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ol className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ol>
  );
};

export default ContactList;
