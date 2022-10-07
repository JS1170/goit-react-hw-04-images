// import { Component } from 'react';
import { Header, Form, ButtonForm, SearchFormInput } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const inputValue = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <ButtonForm type="submit">
          <FaSearch />
        </ButtonForm>

        <SearchFormInput
          onChange={inputValue}
          value={searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
