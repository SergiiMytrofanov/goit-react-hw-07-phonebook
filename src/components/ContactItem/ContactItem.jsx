import React from 'react';
import styles from './ContactItem.module.css'

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.contactItem} key={id}>
      {name}: &nbsp;&nbsp; {number}
      &nbsp;&nbsp;
      <button className={styles.contactItemButton} type="button" onClick={() => onDeleteContact(id)}>
        X
      </button>
    </li>
  );
};

export default ContactItem;
