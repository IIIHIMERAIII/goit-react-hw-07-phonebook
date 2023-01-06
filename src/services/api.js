import axios from "axios";

axios.defaults.baseURL = 'https://63b6aa884f17e3a931bb4db0.mockapi.io/contacts/';

export async function getAllContacts() {
    try {
        const response = await axios.get('/contacts');
        if (response.status === 200) return response;
    } catch (error) {
        return error;
    }
};


export async function addContact(contact) {
    try {
        const response = await axios.post('/contacts', contact);
        if (response.status === 201) return response;
    } catch (error) {
        return error;
    }
};

export async function deleteContact(id) {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        if (response.status === 200) return response;
    } catch (error) {
        return error;
    }
};
