import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FilledSelect from './FilledSelect';

class Filters extends React.Component {
  render() {
    const { filterName, filterRare, onInputChange, filterTrunfo } = this.props;
    return (
      <form>
        <legend>Filtros de Busca</legend>
        <Input
          labelText="Nome"
          type="text"
          testid="name-filter"
          name="filterName"
          value={ filterName }
          handleChange={ onInputChange }
          disabled={ filterTrunfo }
        />
        <br />
        <FilledSelect
          options={ ['todas', 'normal', 'raro', 'muito raro'] }
          name="filterRare"
          handleChange={ onInputChange }
          labelText="Raridade"
          value={ filterRare }
          testid="rare-filter"
          disabled={ filterTrunfo }
        />
        <Input
          labelText="Super Trunfo"
          name="filterTrunfo"
          type="checkbox"
          testid="trunfo-filter"
          handleChange={ onInputChange }
          checked={ filterTrunfo }
        />
      </form>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filters;
