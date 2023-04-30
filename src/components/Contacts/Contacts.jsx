import { React } from 'react';

import style from '../Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contacts = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.list} key={id}>
      <div className={style.text}>
        <p className={style.name}>{`${name}: ${phone}`}</p>
        <button
          className={style.button}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contacts;
