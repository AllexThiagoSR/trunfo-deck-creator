import React from 'react';
import PropTypes from 'prop-types';

class FilledSelect extends React.Component {
  render() {
    const {
      name, value, options, labelText, handleChange, testid, disabled } = this.props;

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
          disabled={ disabled }
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

FilledSelect.defaultProps = {
  disabled: false,
};

FilledSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FilledSelect;
