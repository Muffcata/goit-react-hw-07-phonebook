import React from 'react';
import style from 'components/Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

const ContactList = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ul className={style.wrapper}>
      <li className={style.list} key={contact.id}>
        <div className={style.text}>
          <p className={style.name}>
            {contact.name} : {contact.phone}
          </p>
          <button
            className={style.button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

export default ContactList;
