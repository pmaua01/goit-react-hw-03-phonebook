import React, { Component } from 'react';
import shortid from 'shortid';
import { Phonebook } from 'components/Phonebook/Phonebook';

import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = data => {
    for (const element of this.state.contacts) {
      if (element.name === data.name) {
        alert(`${element.name} is alrady in contacts`);
        return;
      }
    }

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDelete = e => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          width: 720,
          margin: 'auto',
          fontSize: 30,
        }}
      >
        <h1>Phonebook</h1>
        <Phonebook onSubmitForm={this.onSubmitForm}></Phonebook>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <Contacts
          contacts={visibleContacts}
          onDelete={this.onDelete}
        ></Contacts>
      </div>
    );
  }
}
