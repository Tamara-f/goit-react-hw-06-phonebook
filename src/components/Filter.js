import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from '../redux/phohebookActions';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <span>Find name</span>
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  // onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
