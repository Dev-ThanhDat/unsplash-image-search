/* eslint-disable react/prop-types */
import { Form } from 'react-bootstrap';

const FormSearch = ({ handleSearch, searchInput }) => {
  return (
    <div className='search-section'>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type='search'
          placeholder='Type something to search...'
          className='search-input'
          ref={searchInput}
        />
      </Form>
    </div>
  );
};

export default FormSearch;
