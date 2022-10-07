import { Component } from 'react';
import { Header, Form, ButtonForm, SearchFormInput } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  inputValue = event => {
    this.setState({ searchInput: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.onSubmit(this.state.searchInput);
    this.reset();
  };

  reset = () => {
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <ButtonForm type="submit">
            <FaSearch />
          </ButtonForm>

          <SearchFormInput
            onChange={this.inputValue}
            value={this.state.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
