import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FilledSelect from './FilledSelect';

class Filters extends React.Component {
  render() {
    const { filterName, filterRare, onInputChange } = this.props;
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
          key="name"
        />
        <br />
        <FilledSelect
          options={ ['todas', 'normal', 'raro', 'muito raro'] }
          name="filterRare"
          handleChange={ onInputChange }
          labelText="Raridade"
          value={ filterRare }
          testid="rare-filter"
        />
      </form>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
