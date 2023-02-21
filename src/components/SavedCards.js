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
    const { cards, removeCardFunc, attributesNames } = this.props;
    const filteredCards = cards.filter(({ cardName, cardRare, cardTrunfo }) => {
      const { filterName, filterRare, filterTrunfo } = this.state;
      if (filterTrunfo) return cardTrunfo;
      let rarityFilter = filterRare === cardRare;
      if (filterRare === 'todas') rarityFilter = cardRare.includes('');
      return (cardName.includes(filterName) && rarityFilter);
    });
    return (
      <section className="saved-cards-container">
        <Filters { ... this.state } onInputChange={ this.handleChangeFilters } />
        <ul>
          {
            filteredCards.map((card) => (
              <li key={ card.id }>
                <div className="card-button-container">
                  <Card { ...card } attributesNames={ attributesNames } />
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
      </section>
    );
  }
}

SavedCards.defaultProps = {
  attributesNames: {
    attr1Name: 'Atributo 1',
    attr2Name: 'Atributo 2',
    attr3Name: 'Atributo 3',
  },
};

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
  attributesNames: PropTypes.objectOf(PropTypes.string),
};

export default SavedCards;
