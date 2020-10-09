import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactListItem from './ContactListItem';
import { removeContact } from '../redux/phohebookActions';

const ContactList = ({ contacts, onRemoveContact }) => {
  if (contacts.length > 0) {
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        ))}
      </ul>
    );
  } else return null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => {
  const { items, filter } = contacts;

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
