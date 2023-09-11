
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch('https://64fc19e5605a026163ae2eac.mockapi.io/api/v1/contacts');
  if (!response.ok) {
    throw new Error('Unable to fetch contacts');
  }
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await fetch('https://64fc19e5605a026163ae2eac.mockapi.io/api/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  });
  if (!response.ok) {
    throw new Error('Unable to add contact');
  }
  const data = await response.json();
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  const response = await fetch(`https://64fc19e5605a026163ae2eac.mockapi.io/api/v1/contacts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Unable to delete contact');
  }
  return id;
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleSearchByPhone: (state) => {
      state.searchByPhone = !state.searchByPhone;
      state.filter = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter, toggleSearchByPhone } = contactSlice.actions;

export default contactSlice.reducer;
