export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filterData;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterData = selectFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );
};
