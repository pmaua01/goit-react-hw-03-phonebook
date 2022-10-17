import React, { Component } from 'react';
import {
  FormPhoneBook,
  FormLabel,
  FormInput,
  FormButton,
} from './Phonebook.styled';
export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormPhoneBook onSubmit={this.onSubmit}>
        <FormLabel>
          Name:
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeInput}
          />
        </FormLabel>
        <FormLabel>
          Number:
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChangeInput}
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormPhoneBook>
    );
  }
}
