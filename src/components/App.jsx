import React from 'react';
import { Section } from './section/section';
import { Form } from './contactForm/form';
import { Filter } from './filter/filter';
import { Phonebook } from "./phonebook/phonebook";
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <Section title='Phonebook'>
        <Form
        >
        </Form>
        <Section title='Contacts'>
          <Filter
          />
          {contacts.length > 0 ? 'Contacts' : 'No contacts'}
          <Phonebook
          />
        </Section>
      </Section>
    </div>
  );
};

export { App };