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
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => {
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
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

  [orderContacts.fulfilled]: (_state, { payload }) => {
    return [...payload];
  },
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => {
    return payload;
  },
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
  [fetchContacts.rejected]: (_state, { payload }) => payload,
  [addContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.rejected]: (_state, { payload }) => payload,
  [changeContactName.rejected]: (_state, { payload }) => payload,
  [changeContactNumber.rejected]: (_state, { payload }) => payload,
  [orderContacts.rejected]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
