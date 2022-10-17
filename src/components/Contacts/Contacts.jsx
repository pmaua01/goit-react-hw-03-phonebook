import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ContactsButton } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            {contact.name}:{contact.number}
            <ContactsButton id={contact.id} type="button" onClick={onDelete}>
              Delete
            </ContactsButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
