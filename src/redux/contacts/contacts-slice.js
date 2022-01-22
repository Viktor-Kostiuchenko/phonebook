import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContactName,
  changeContactNumber,
  orderContacts,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    // fetch user contacts
    [fetchContacts.pending](state, _action) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.loading = false;
    },
    [fetchContacts.rejected](state, _action) {
      state.loading = false;
    },

    // add contact
    [addContact.pending](state, _action) {
      state.loading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items = [payload, ...state.items];
      state.loading = false;
    },
    [addContact.rejected](state, _action) {
      state.loading = false;
    },

    // delete contact
    [deleteContact.pending](state, _action) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
    },
    [deleteContact.rejected](state, _action) {
      state.loading = false;
    },

    // change contact name
    [changeContactName.pending](state, _action) {
      state.loading = true;
    },
    [changeContactName.fulfilled](state, { payload }) {
      state.items = state.items.map(contact =>
        contact.id === payload.id
          ? { ...contact, name: payload.value }
          : contact,
      );
      state.loading = false;
    },
    [changeContactName.rejected](state, _action) {
      state.loading = false;
    },

    // change contact number
    [changeContactNumber.pending](state, _action) {
      state.loading = true;
    },
    [changeContactNumber.fulfilled](state, { payload }) {
      state.items = state.items.map(contact =>
        contact.id === payload.id
          ? { ...contact, number: payload.value }
          : contact,
      );
      state.loading = false;
    },
    [changeContactNumber.rejected](state, _action) {
      state.loading = false;
    },

    // order contacts
    [orderContacts.pending](state, _action) {
      state.loading = true;
    },
    [orderContacts.fulfilled](state, { payload }) {
      state.items = [...payload];
      state.loading = false;
    },
    [orderContacts.rejected](state, _action) {
      state.loading = false;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
