import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FilledSelect from './FilledSelect';
import '../styles/Form.css';

class Form extends React.Component {
  hasTrunfoInDeck = (has, input) => (
    has ? 'Você já tem um Super Trunfo em seu baralho' : input
  );

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      cardTrunfo,
      hasTrunfo,
    } = this.props;

    const checkBoxInput = (<Input
      key="trunfo"
      labelText="Super Trunfo"
      name="cardTrunfo"
      type="checkbox"
      testid="trunfo-input"
      handleChange={ onInputChange }
      checked={ cardTrunfo }
    />);

    const atributs = ['Attr1', 'Attr2', 'Attr3'];
    const { props } = this;

    return (
      <form className="form">
        <fieldset>
          <legend key="title">Adicione uma nova carta</legend>
          <Input
            labelText="Nome"
            type="text"
            testid="name-input"
            name="cardName"
            value={ cardName }
            handleChange={ onInputChange }
            key="name"
            className="text-input"
          />
          <br />
          <label htmlFor="description">
            Descrição
            <br />
            <textarea
              id="description"
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              key="description-input"
              className="text-input"
            />
          </label>
          <br />
          <div className="flex-container">
            {
              atributs.map((attr, index) => (
                <label
                  key={ attr }
                  className="number-input"
                  htmlFor={ `attr${index + 1}` }
                >
                  { attr }
                  <br />
                  <input
                    id={ `attr${index + 1}` }
                    name={ `card${attr}` }
                    value={ props[`card${attr}`] }
                    type="number"
                    onChange={ onInputChange }
                    data-testid={ `attr${index + 1}-input` }
                    key={ attr }
                  />
                </label>
              ))
            }
          </div>
          <br />
          <Input
            key="image"
            labelText="Imagem"
            name="cardImage"
            value={ cardImage }
            type="text"
            testid="image-input"
            handleChange={ onInputChange }
            className="text-input"
          />
          <br />
          { this.hasTrunfoInDeck(hasTrunfo, checkBoxInput) }
          <br />
          <FilledSelect
            key="rarity"
            options={ ['normal', 'raro', 'muito raro'] }
            name="cardRare"
            handleChange={ onInputChange }
            labelText="Raridade"
            value={ cardRare }
            testid="rare-input"
          />
          <br />
          <button
            key="save-button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}

Form.defaultProps = { cardName: '',
  cardDescription: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false };

Form.propTypes = { onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired };

export default Form;
