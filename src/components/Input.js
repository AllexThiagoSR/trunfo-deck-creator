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
      checked,
      disabled,
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
          name={ name }
          key={ name }
          checked={ checked }
          disabled={ disabled }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  checked: false,
  disabled: false,
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
