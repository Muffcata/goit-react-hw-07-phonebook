import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
// import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <ContactList /> */}
      <Contacts />
    </div>
  );
};
export default App;
