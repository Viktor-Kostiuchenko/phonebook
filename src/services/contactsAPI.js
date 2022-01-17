import axios from 'axios';

axios.defaults.baseURL = 'https://61d8bdfde6744d0017ba8c66.mockapi.io';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.patch['X-Requested-With'] = 'XMLHttpRequest';

export const fetchContactsAPI = () => axios.get('/contacts');
export const addContactAPI = contact => axios.post('/contacts', contact);
export const deleteContactAPI = id => axios.delete(`/contacts/${id}`);
export const changeContactNameAPI = (id, data) =>
  axios.patch(`/contacts/${id}`, { name: data });
export const changeContactNumberAPI = (id, data) =>
  axios.patch(`/contacts/${id}`, { number: data });
