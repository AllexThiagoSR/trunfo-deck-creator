import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
  };

  checkMissingInfos = (...infos) => infos.some((value) => value === '');

  sum = (...nums) => nums.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  checkAtributsValues = (maxSum, ...attrs) => this.sum(...attrs) > maxSum;

  checkLimitAtributs = (limit, ...attrs) => attrs
    .some((attr) => parseInt(attr, 10) > limit || parseInt(attr, 10) < 0);

  checkDisableButtonConditions = () => {
    const maxSum = 210;
    const limit = 90;
    const { cardName, cardImage, cardDescription, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const missingAnyInfo = this.checkMissingInfos(
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    );
    const attrsValidValues = this
      .checkAtributsValues(maxSum, cardAttr1, cardAttr2, cardAttr3);
    const attrsLimitValues = this
      .checkLimitAtributs(limit, cardAttr1, cardAttr2, cardAttr3);
    this.setState({
      isSaveButtonDisabled: (missingAnyInfo || attrsValidValues || attrsLimitValues),
    });
  };

  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.checkDisableButtonConditions);
  };

  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClick }
        />
        <Card { ...this.state } />
      </main>
    );
  }
}

export default App;
