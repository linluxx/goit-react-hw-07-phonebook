import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Container, Title, ContactsTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>
        <FaPhoneAlt />
        Phonebook
      </Title>
      <ContactForm />
      <ContactsTitle>
        <FaUserFriends />
        Contacts
      </ContactsTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};
