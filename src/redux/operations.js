import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts, addContact, deleteContact } from "services/api";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await getAllContacts();
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    });


export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (contact, { thunkAPI, dispatch }) => {
        try {
            const response = await addContact(contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    '/contacts/deleteContacts',

    async (id, { thunkAPI, dispatch }) => {
        try {
            const response = await deleteContact(id);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);