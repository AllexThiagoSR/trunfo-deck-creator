import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const { infos: { cardName, description, image, trunfo } } = this.props;
    const { infos } = this.props;
    const atributs = ['Attr01', 'Attr02', 'Attr03'];

    return (
      <form>
        <fieldset>
          <legend>Adicione nova carta</legend>
          <Input
            labelText="Nome"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
          />
          <label htmlFor="description">
            <textarea
              id="description"
              data-testid="description-input"
              name="description"
              value={ description }
            />
          </label>
          {
            atributs.map((attr, index) => (
              <Input
                labelText={ attr }
                key={ attr }
                type="number"
                data-testid={ `attr${index + 1}-input` }
                name={ `attr${index + 1}` }
                value={ infos[`attr${index + 1}`] }
              />
            ))
          }
          <Input
            labelText="Imagem"
            name="image"
            value={ image }
            type="text"
            data-testid="image-input"
          />
          <Input
            labelText="Super Trunfo"
            name="trunfo"
            value={ trunfo }
            type="checkbox"
            data-testid="trunfo-input"
          />
          <button data-testid="save-button">Salvar</button>
        </fieldset>
      </form>
    );
  }
}

Form.defaultProps = {
  trunfo: false,
};

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  trunfo: PropTypes.bool,
  infos: PropTypes.shape({
    cardName: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    trunfo: PropTypes.bool,
    attr1: PropTypes.number,
    attr2: PropTypes.number,
    attr3: PropTypes.number,
  }).isRequired,
};

export default Form;
