import { React } from 'react';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';

import { useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <>Loading...</>}
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactList key={id} contact={{ id, name, phone }} />
      ))}
    </>
  );
};

export default Contacts;
