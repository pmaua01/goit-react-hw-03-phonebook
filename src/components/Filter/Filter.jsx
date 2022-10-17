import PropTypes from 'prop-types';
import React from 'react';
import { FilterLabel, FilterInput } from './Filer.styles';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by Name
    <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
