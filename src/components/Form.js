import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FilledSelect from './FilledSelect';

class Form extends React.Component {
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
    const atributs = ['Attr1', 'Attr2', 'Attr3'];
    const { props } = this;

    return (
      <form>
        <legend key="title">Adicione nova carta</legend>
        <Input
          labelText="Nome"
          type="text"
          testid="name-input"
          name="cardName"
          value={ cardName }
          handleChange={ onInputChange }
          key="name"
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
          />
        </label>
        <br />
        {
          atributs.map((attr, index) => (
            <>
              <label key={ attr } htmlFor={ `attr${index + 1}` }>
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
              <br />
            </>
          ))
        }
        <br />
        <Input
          key="image"
          labelText="Imagem"
          name="cardImage"
          value={ cardImage }
          type="text"
          testid="image-input"
          handleChange={ onInputChange }
        />
        <br />
        <Input
          key="trunfo"
          labelText="Super Trunfo"
          name="cardTrunfo"
          type="checkbox"
          testid="trunfo-input"
          handleChange={ onInputChange }
          checked={ cardTrunfo }
          disabled={ hasTrunfo }
        />
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
