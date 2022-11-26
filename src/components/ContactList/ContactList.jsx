import { useDispatch, useSelector } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';

import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slices/contactsSlice';

import {
  ContactName,
  ContactNumber,
  ContactsItem,
  ContactsList,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtered = filterContacts();

  return (
    <ContactsList>
      {filtered.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactName>
            <FaRegUserCircle /> {name}
          </ContactName>
          <ContactNumber> {number}</ContactNumber>
          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </DeleteButton>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
