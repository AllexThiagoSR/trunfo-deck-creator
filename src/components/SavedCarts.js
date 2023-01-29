import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Filters from './Filters';

class SavedCards extends React.Component {
  state = {
    filterName: '',
    filterRare: 'todas',
  };

  handleChangeFilters = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cards, removeCardFunc } = this.props;
    const filteredCards = cards.filter(({ cardName, cardRare }) => {
      const { filterName, filterRare } = this.state;
      let rarityFilter = filterRare === cardRare;
      if (filterRare === 'todas') rarityFilter = cardRare.includes('');
      return (cardName.includes(filterName) && rarityFilter);
    });
    return (
      <div>
        <Filters { ... this.state } onInputChange={ this.handleChangeFilters } />
        {
          filteredCards.map((card) => (
            <div key={ card.id }>
              <Card { ...card } />
              <button
                data-testid="delete-button"
                onClick={ removeCardFunc }
                value={ card.id }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

SavedCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  removeCardFunc: PropTypes.func.isRequired,
};

export default SavedCards;
