import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Container, Title, ContactsTitle } from './App.styled';

export const App = () => {
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
      <ContactList />
    </Container>
  );
};
