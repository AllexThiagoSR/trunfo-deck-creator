import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SavedCards from './components/SavedCards';
import generateId from './generateId';
import './styles/App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    isSaveButtonDisabled: true,
    savedCards: [],
    attributesNames: {
      attr1Name: 'Atributo 1',
      attr2Name: 'Atributo 2',
      attr3Name: 'Atributo 3',
    },
  };

  checkMissingInfos = (...infos) => infos.some((value) => value === '');

  sum = (...nums) => nums.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  checkAtributsValues = (maxSum, ...attrs) => this.sum(...attrs) > maxSum;

  checkLimitAtributs = (limit, ...attrs) => attrs
    .some((attr) => parseInt(attr, 10) > limit || parseInt(attr, 10) < 0);

  filterCardInformations = () => Object
    .values(this.state).filter((info) => typeof info === 'string');

  filterCardInfosObject = () => Object
    .entries(this.state).reduce((acc, [key, value]) => (
      typeof value === 'string' ? { ...acc, [key]: value } : acc
    ), {});

  checkDisableButtonConditions = () => {
    const maxSum = 210;
    const limit = 90;
    const stateInfos = this.filterCardInformations();
    const missingAnyInfo = this.checkMissingInfos(...stateInfos);
    const attrsValidValues = this
      .checkAtributsValues(maxSum, stateInfos[4], stateInfos[5], stateInfos[6]);
    const attrsLimitValues = this
      .checkLimitAtributs(limit, stateInfos[4], stateInfos[5], stateInfos[6]);

    this.setState({
      isSaveButtonDisabled: (missingAnyInfo || attrsValidValues || attrsLimitValues),
    });
  };

  checkSuperTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  };

  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.checkDisableButtonConditions);
  };

  changeAttributesNames = ({ target: { name, value } }) => {
    const { attributesNames } = this.state;
    attributesNames[name] = value;
    this.setState({
      attributesNames,
    });
  };

  createCardObject = () => {
    const quantityIdDig = 6;
    const { cardTrunfo } = this.state;
    return { id: generateId(quantityIdDig), cardTrunfo, ...this.filterCardInfosObject() };
  };

  saveCard = () => {
    const { savedCards } = this.state;
    this.setState({
      savedCards: [...savedCards, this.createCardObject()],
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.saveCard();
    this.checkSuperTrunfo();

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
    }, this.checkDisableButtonConditions);
  };

  deleteCard = ({ target: { value } }) => {
    const idToRemove = value;
    const { savedCards, hasTrunfo } = this.state;
    const cardToRemove = savedCards.find(({ id }) => id === idToRemove);
    this.setState({
      savedCards: savedCards.filter(({ id }) => id !== idToRemove),
      hasTrunfo: (cardToRemove ? !cardToRemove.cardTrunfo : hasTrunfo),
    });
  };

  render() {
    const { savedCards, attributesNames } = this.state;
    return (
      <>
        <header><h1>Tryunfo</h1></header>
        <section className="form-preview-section">
          <Form
            { ...this.state }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleClick }
            changeAttributesNames={ this.changeAttributesNames }
          />
          <Card { ...this.state } />
        </section>
        <SavedCards
          cards={ savedCards }
          removeCardFunc={ this.deleteCard }
          attributesNames={ attributesNames }
        />
      </>
    );
  }
}

export default App;
