import { v4 as uuidv4 } from 'uuid';

import actionTypes from './phonebookActionTypes';

export const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    contact: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  },
});

export const removeContact = contactId => {
  return {
    type: actionTypes.REMOVE,
    payload: {
      contactId,
    },
  };
};

export const changeFilter = filter => {
  return {
    type: actionTypes.FILTER,
    payload: {
      filter,
    },
  };
};
