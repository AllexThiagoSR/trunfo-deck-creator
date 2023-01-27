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
    } = this.props;

    return (
      <label htmlFor={ name }>
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
        />
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  checked: false,
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default Input;
