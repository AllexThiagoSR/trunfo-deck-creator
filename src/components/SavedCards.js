import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Filters from './Filters';
import '../styles/SavedCards.css';

class SavedCards extends React.Component {
  state = {
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
  };

  handleChangeFilters = ({ target: { value, name, type, checked } }) => {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  };

  render() {
    const { cards, removeCardFunc } = this.props;
    const filteredCards = cards.filter(({ cardName, cardRare, cardTrunfo }) => {
      const { filterName, filterRare, filterTrunfo } = this.state;
      if (filterTrunfo) return cardTrunfo;
      let rarityFilter = filterRare === cardRare;
      if (filterRare === 'todas') rarityFilter = cardRare.includes('');
      return (cardName.includes(filterName) && rarityFilter);
    });
    return (
      <div className="saved-cards-container">
        <Filters { ... this.state } onInputChange={ this.handleChangeFilters } />
        <ul>
          {
            filteredCards.map((card) => (
              <li key={ card.id }>
                <div>
                  <Card { ...card } />
                  <button
                    data-testid="delete-button"
                    onClick={ removeCardFunc }
                    value={ card.id }
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
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
