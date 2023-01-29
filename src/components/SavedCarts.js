import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  render() {
    const { cards, removeCardFunc } = this.props;
    return (
      <div>
        {
          cards.map((card) => (
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
