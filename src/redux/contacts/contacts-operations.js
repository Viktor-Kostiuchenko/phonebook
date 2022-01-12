import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await API.fetchContactsAPI();
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const { data } = await API.addContactAPI({ name, number });
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await API.deleteContactAPI(id);
    return id;
  },
);

export const changeContactName = createAsyncThunk(
  'contacts/changeContactName',
  async ({ id, value }) => {
    const { data } = await API.changeContactNameAPI(id, value);
    return { data };
  },
);

export const changeContactNumber = createAsyncThunk(
  'contacts/changeContactNumber',
  async ({ id, value }) => {
    const { data } = await API.changeContactNumberAPI(id, value);
    return data;
  },
);

export const orderContacts = createAsyncThunk(
  'contacts/orderContacts',
  async contacts => {
    return contacts;
  },
);
