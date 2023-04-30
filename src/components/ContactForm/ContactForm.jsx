import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addContact } from 'redux/operations';
import style from './ContactForm.module.css';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const foundContant = contacts.find(contact => contact.name === name);

    if (foundContant) {
      return alert(name + 'is already in contacts.');
    } else {
      dispatch(addContact({ name: name, phone: phone }));
    }
    form.reset();
  };

  return (
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input_name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input_number}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
