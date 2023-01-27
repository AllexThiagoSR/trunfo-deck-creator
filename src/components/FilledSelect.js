import React from 'react';
import PropTypes from 'prop-types';

class FilledSelect extends React.Component {
  render() {
    const { name, value, options, labelText, handleChange, testid } = this.props;

    return (
      <label htmlFor={ name }>
        { labelText }
        <br />
        <select
          id={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ testid }
          name={ name }
        >
          {
            options.map((opt) => (
              <option key={ opt }>
                { opt }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

FilledSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default FilledSelect;
