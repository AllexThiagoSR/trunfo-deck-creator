import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelText,
      type,
      testid,
      name,
      value,
      handleChange,
    } = this.props;

    return (
      <label key={ name } htmlFor={ name }>
        { labelText }
        { type === 'checkbox' ? '' : <br /> }
        <input
          id={ name }
          type={ type }
          data-testid={ testid }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
