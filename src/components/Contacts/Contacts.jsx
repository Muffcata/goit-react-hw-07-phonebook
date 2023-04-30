import { React } from 'react';

import style from '../Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contacts = contact => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default Contacts;
