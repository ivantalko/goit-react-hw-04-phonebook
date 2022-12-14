import PropTypes from 'prop-types';
import { useState } from 'react';
export const ContactForm = ({ phoneSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelSubmitTow = event => {
    event.preventDefault();
    phoneSubmit(name, number);
    setName('');
    setNumber('');
  };
  const onChangeName = event => {
    setName(event.target.value);
  };
  const onChangeNumber = event => {
    setNumber(event.target.value);
  };

  return (
    <>
      <form onSubmit={handelSubmitTow}>
        <label htmlFor="input">Name</label>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="input">Number</label>
        <input
          value={number}
          onChange={onChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add conact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  phoneSubmit: PropTypes.func.isRequired,
};
