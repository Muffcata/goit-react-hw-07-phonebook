import { React } from 'react';
import { selectFilteredContacts } from 'redux/selectors';
import style from '../Contacts/Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul className={style.wrapper}>
      {filteredContacts.map(contact => {
        return (
          <li className={style.list} key={contact.id}>
            <div className={style.text}>
              <p className={style.name}>
                {contact.name}: {contact.phone}
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
      })}
    </ul>
  );
};

export default Contacts;
