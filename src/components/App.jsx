import React from 'react';
import { Section } from './section/section';
import { Form } from './contactForm/form';
import { Filter } from './filter/filter';
import { Phonebook } from "./phonebook/phonebook";
import { useSelector } from 'react-redux';
import { useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const contactsFromStore = useSelector(state => state.contacts.contacts.items);
  const filterFromStore = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contactsFromStore.filter(el =>
      el.name.toLowerCase().includes(filterFromStore.toLowerCase())
    );
  };

  return (
    <div>
      <Section title='Phonebook'>
        <Form
        >
        </Form>
        <Section title='Contacts'>
          <Filter
          />
          {contactsFromStore.lenght > 0 ? 'Contacts' : 'No contacts'}
          <Phonebook
            contacts={contactsFromStore}
            filterContacts={getFilterContacts()}
          />
        </Section>
      </Section>
    </div>
  );
};

export { App };
