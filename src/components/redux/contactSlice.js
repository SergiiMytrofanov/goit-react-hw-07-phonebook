import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    searchByPhone: false,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleSearchByPhone: (state) => {
      state.searchByPhone = !state.searchByPhone;
      state.filter = '';
    },
    loadContacts: (state, action) => {
      // Завантаження даних з локального сховища
      state.contacts = action.payload || [];
    },
  },
});

export const {
  addContact,
  deleteContact,
  setFilter,
  toggleSearchByPhone,
  loadContacts,
} = contactSlice.actions;

export default contactSlice.reducer;
