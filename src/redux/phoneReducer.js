import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, changeFilter } from './phohebookActions';

const onAddContact = (state, action) => [...state, action.payload.contact];

const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
