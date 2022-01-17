import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContactName,
  changeContactNumber,
  orderContacts,
} from './contacts-operations';
import { changeFilter, changeTheme } from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [changeContactName.fulfilled]: (state, { payload }) => {
    return state.map(contact =>
      contact.id === payload.id ? { ...contact, name: payload.value } : contact,
    );
  },

  [changeContactNumber.fulfilled]: (state, { payload }) => {
    return state.map(contact =>
      contact.id === payload.id
        ? { ...contact, number: payload.value }
        : contact,
    );
  },

  [orderContacts.fulfilled]: (_, { payload }) => {
    return [...payload];
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const darkTheme = createReducer(false, {
  [changeTheme]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [changeContactName.pending]: () => true,
  [changeContactName.fulfilled]: () => false,
  [changeContactName.rejected]: () => false,
  [changeContactNumber.pending]: () => true,
  [changeContactNumber.fulfilled]: () => false,
  [changeContactNumber.rejected]: () => false,
  [orderContacts.pending]: () => true,
  [orderContacts.fulfilled]: () => false,
  [orderContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [changeContactName.rejected]: (_, { payload }) => payload,
  [changeContactNumber.rejected]: (_, { payload }) => payload,
  [orderContacts.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  darkTheme,
  loading,
  error,
});
