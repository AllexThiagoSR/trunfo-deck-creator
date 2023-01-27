import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FilledSelect from './FilledSelect';

class Form extends React.Component {
  render() {
    const {
      infos: { cardName, description, image, trunfo, rarity },
      handleChange,
    } = this.props;
    const { infos } = this.props;
    const atributs = ['Attr01', 'Attr02', 'Attr03'];

    return (
      <form>
        <legend key="title">Adicione nova carta</legend>
        <Input
          labelText="Nome"
          type="text"
          testid="name-input"
          name="cardName"
          value={ cardName }
          handleChange={ handleChange }
          key="name"
        />
        <br />
        <label key="description-input" htmlFor="description">
          Descrição
          <br />
          <textarea
            id="description"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <br />
        {
          atributs.map((attr, index) => (
            <>
              <Input
                labelText={ attr }
                type="number"
                testid={ `attr${index + 1}-input` }
                name={ `attr${index + 1}` }
                value={ infos[`attr${index + 1}`] }
                handleChange={ handleChange }
                key={ attr }
              />
              <br key="br1" />
            </>
          ))
        }
        <br />
        <Input
          key="image"
          labelText="Imagem"
          name="image"
          value={ image }
          type="text"
          testid="image-input"
          handleChange={ handleChange }
        />
        <br />
        <Input
          key="trunfo"
          labelText="Super Trunfo"
          name="trunfo"
          value={ trunfo }
          type="checkbox"
          testid="trunfo-input"
          handleChange={ handleChange }
        />
        <br />
        <FilledSelect
          key="rarity"
          options={ ['normal', 'raro', 'muito raro'] }
          name="rarity"
          handleChange={ handleChange }
          labelText="Raridade"
          value={ rarity }
          testid="rare-input"
        />
        <br />
        <button key="save-button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

Form.defaultProps = {
  trunfo: false,
  cardName: '',
  description: '',
  image: '',
  rarity: 'normal',
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  cardName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  trunfo: PropTypes.bool,
  rarity: PropTypes.string,
  infos: PropTypes.shape({
    cardName: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    trunfo: PropTypes.bool,
    attr1: PropTypes.number,
    attr2: PropTypes.number,
    attr3: PropTypes.number,
    handleChange: PropTypes.func,
    rarity: PropTypes.string,
  }).isRequired,
};

export default Form;
