import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.props;
    return (
      <div className="card">
        <div className="img-container">
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div className="info-container">
          <h2 data-testid="name-card" className="card-name">{ cardName }</h2>
          <p data-testid="description-card" className="desc-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo ? (
              <p data-testid="trunfo-card" className="trunfo">Super Trunfo</p>
            ) : ''
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default Card;
